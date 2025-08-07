import { useState } from "react";
import { useLocalStorage } from "react-haiku";

// import { updateStockById } from "../services/updateStockById";
import Button from "../../ui/Button";
import Error from "../../ui/Error";
import { addToCart } from "../../utils/helpers";
// import toast from "react-hot-toast";
import { useIsInCart } from "../carts/useIsInCart";

function Product({ product }) {
  console.log(product);
  const { id, name, description, price, image, category, inStock } = product;
  const [qtyAvilable, setQtyAvailabe] = useState(inStock);

  // for select element => we need to change uncontrolled element to controlled element
  const [quantity, setQuantity] = useState(1);

  const [shoppingCart, setShoppingCart] = useLocalStorage("cart", []);
  const { isAlreadyInYourCart } = useIsInCart(shoppingCart, id);

  // function handleAddToCart() {
  //   // Update stock in database
  //   updateStockById(id, quantity);
  //   // Update local stock state
  //   setQtyAvailabe((prev) => prev - quantity);

  //   const newProduct = {
  //     id,
  //     name,
  //     description,
  //     price,
  //     image,
  //     category,
  //     quantity,
  //   };
  //   setShoppingCart((shoppingCart) => [...shoppingCart, newProduct]);
  //   toast.success(`You Added to your cart 🎉`);
  // }

  function handleAddToCart() {
    setQtyAvailabe((prev) => prev - quantity);
    const newProduct = addToCart(product, quantity);
    setShoppingCart((shoppingCart) => [...shoppingCart, newProduct]);
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>{" "}
      {/* Content container */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category */}
        <div className="mb-3">
          <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
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
        {qtyAvilable <= 0 ? (
          <Error>This product out of stock</Error>
        ) : (
          <div className="mt-auto space-y-3">
            <div className="flex items-center justify-between">
              {isAlreadyInYourCart ? (
                <p className="font-bold text-green-600">Already in Cart</p>
              ) : (
                <>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      ${price?.toFixed(2)}
                    </span>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(+e.target.value)}
                      className="h-9 rounded-md border border-gray-200 bg-white px-3 text-sm shadow-sm transition-colors hover:border-yellow-300 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none"
                    >
                      {Array.from({ length: 5 }, (_, i) => (
                        <option
                          key={i + 1}
                          value={i + 1}
                          disabled={i + 1 > qtyAvilable}
                        >
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
            </div>
            <Button
              className="w-full cursor-pointer rounded-md border border-gray-200 bg-yellow-300 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-yellow-500 hover:bg-yellow-400 hover:text-gray-900 focus:ring-2 focus:ring-yellow-400 focus:outline-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:border-gray-200 disabled:hover:bg-gray-200 disabled:hover:text-gray-400"
              onClick={handleAddToCart}
              disabled={isAlreadyInYourCart}
            >
              Add to Cart
            </Button>
            <Button
              to={`${id}`}
              className="block w-full cursor-pointer rounded-md border border-gray-200 bg-white px-4 py-2 text-center text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:outline-none"
            >
              Preview
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
