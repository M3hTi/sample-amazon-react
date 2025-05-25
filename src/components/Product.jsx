import { useState } from "react";
import { useLocalStorage } from "react-haiku";
import toast from "react-hot-toast";

import { useIsInCart } from "../hooks/useIsInCart";
import Button from "../ui/Button";

function Product({ product }) {
  const { id, name, description, price, image, category } = product;

  // for select element => we need to change uncontrolled element to controlled element
  const [quantity, setQuantity] = useState(1);

  const [shoppingCart, setShoppingCart] = useLocalStorage("cart", []);
  const { isAlreadyInYourCart } = useIsInCart(shoppingCart, id);

  function handleAddToCart(item) {
    const newProduct = {
      ...item,
      quantity,
    };
    setShoppingCart((shoppingCart) => [...shoppingCart, newProduct]);
    toast.success(`You Added to your cart 🎉`);
  }
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-10"></div>
      </div>

      {/* Content container */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category */}
        <div className="mb-2">
          <span className="inline-block rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
            {category}
          </span>
        </div>

        {/* Product name */}
        <h3 className="mb-2 line-clamp-2 flex-1 text-lg font-medium text-gray-900">
          {name}
        </h3>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm text-gray-500">{description}</p>

        {/* Price and buttons container */}
        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between">
            {isAlreadyInYourCart ? (
              <p className="font-bold">
                This product is Already in Your Cart!
              </p>
            ) : (
              <>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-gray-900">
                    ${price?.toFixed(2)}
                  </span>
                  <select
                    onChange={(e) => setQuantity(+e.target.value)}
                    className="h-9 rounded-md border-gray-300 bg-white px-3 text-sm shadow-sm focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none"
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <option value={`${i + 1}`}>{i + 1}</option>
                    ))}
                  </select>
                </div>

                <Button
                  className="cursor-pointer rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </>
            )}
          </div>
          <Button className="w-full cursor-pointer rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300">
            Preview
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
