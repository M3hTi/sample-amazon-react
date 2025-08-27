import { useState } from "react";
import { useLocalStorage } from "react-haiku";
import { GoDotFill } from "react-icons/go";
import { Link, useParams } from "react-router-dom";

import Button from "../../ui/Button";
import CommentForm from "../../ui/commentForm";
import Error from "../../ui/Error";
import ShowComments from "../../ui/ShowComments";
import Spinner from "../../ui/Spinner";
import { addToCart, formatCurrency } from "../../utils/helpers";
import { useUser } from "../authentication/useUser";
import { useIsInCart } from "../carts/useIsInCart";
import { useComments } from "./useComments";
import { useProducts } from "./useProducts";

function Preview() {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const [shoppingCart, setShoppingCart] = useLocalStorage("cart", []);

  const { isAlreadyInYourCart } = useIsInCart(shoppingCart, Number(id));

  const { user } = useUser();

  const { data, isLoading, isError } = useProducts(id);

  console.log(data);

  const [product] = data || [];
  const { name, image, description, price, id: productId } = product || {};
  const descriptionArr = description?.split("\n");
  console.log(descriptionArr);

  const { comments } = useComments(productId);

  console.log(comments);

  function handleAddToCart() {
    const newProduct = addToCart(product, quantity);
    setShoppingCart((shoppingCart) => [...shoppingCart, newProduct]);
  }

  // Show loading spinner while fetching
  if (isLoading) {
    return <Spinner />;
  }

  // Only show "not found" if we're done loading AND there's no product
  if (!isLoading && isError) {
    return <Error>🤨 something went wrong!!</Error>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Breadcrumb */}
        <div className="col-span-full">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900">{name}</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-lg bg-white shadow-md">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain p-8"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
            <p className="mt-2 text-xl font-semibold text-amber-600">
              {formatCurrency(price)}
            </p>
          </div>

          <div className="prose max-w-none">
            {descriptionArr?.map((description) => (
              <p className="text-gray-600">
                <span className="inline-block">
                  <GoDotFill />
                </span>
                {description}
              </p>
            ))}
          </div>

          {isAlreadyInYourCart ? (
            <p className="font-bold text-green-600">Already in Cart</p>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Quantity:</span>

                <select
                  value={quantity}
                  onChange={(e) => setQuantity(+e.target.value)}
                  className="rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none"
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleAddToCart}
                  className="w-full cursor-pointer rounded-lg bg-yellow-400 px-6 py-3 text-center text-base font-semibold text-gray-900 shadow-sm transition-colors hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {comments?.length > 0 && <ShowComments productId={productId} />}

      {Object.keys(user || {}).length > 0 ? (
        <CommentForm productId={productId} />
      ) : (
        <div>
          <p>Please sign in to your account before posting your comment</p>
        </div>
      )}
    </div>
  );
}

export default Preview;
