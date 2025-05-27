import { useState } from "react";
import { useLocalStorage } from "react-haiku";
import toast from "react-hot-toast";

import { updateStockById } from "../services/updateStockById";
import Button from "../ui/Button";

function CartItem({ item }) {
  console.log(item);
  const { id, image, description, name, price, quantity, inStock } = item;

  //   for controlled the uncontroll select element
  const [quantitySelector, setQuantitySelector] = useState(quantity);

  // State to track if user tried to exceed stock
  const [showStockWarning, setShowStockWarning] = useState(false);

  const availableInStocck = quantity + inStock;
  console.log(availableInStocck);

  const [shoppingCart, setShoppingCart] = useLocalStorage("cart");

  function handleDeleteItem() {
    setShoppingCart((cartItems) => cartItems.filter((item) => item.id !== id));
    updateStockById(id, quantitySelector, "delete");
    toast.success(`You Delete an item from your cart ⚠️`);
  }

  function handleUpdateItem() {
    setShoppingCart((cartItems) =>
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: quantitySelector,
              inStock: availableInStocck - quantitySelector,
            }
          : item,
      ),
    );

    quantitySelector > quantity
      ? updateStockById(id, quantitySelector - quantity)
      : updateStockById(id, quantity - quantitySelector, "increase");

    toast.success(`Updated quantity for ${name} to ${quantitySelector}`);
  }

  function handleQuantityChange(e) {
    const newQuantity = +e.target.value;

    if (newQuantity > availableInStocck) {
      setShowStockWarning(true);
      // Don't update the quantity selector if it exceeds available stock
      return;
    } else {
      setShowStockWarning(false);
      setQuantitySelector(newQuantity);
    }
  }

  return (
    <div className="flex flex-col gap-4 border-gray-200 px-2 py-4 transition-colors hover:bg-gray-50 md:flex md:items-center [&:not(:last-child)]:border-b">
      {/* Product Image */}
      <div className="h-24 w-24 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="h-full w-full rounded-md object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-grow">
        <h3 className="mb-1 text-lg font-medium text-gray-900">{name}</h3>
        <p className="mb-2 line-clamp-2 text-sm text-gray-500">{description}</p>

        {/* Stock Warning Message */}
        {showStockWarning && (
          <div className="mb-3 rounded-md border border-red-200 bg-red-50 px-3 py-2">
            <p className="text-sm text-red-700">
              ⚠️ Sorry, only {availableInStocck} items available in stock. You
              cannot add more than this quantity.
            </p>
          </div>
        )}

        {/* Price, Quantity and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4 md:flex md:items-center">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Quantity:</span>
              <input
                disabled={quantitySelector >= availableInStocck}
                type="number"
                value={quantitySelector}
                min="1"
                onChange={handleQuantityChange}
                className="w-16 rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button
                onClick={handleUpdateItem}
                className="cursor-pointer rounded-md bg-amber-500 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-amber-600 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none"
              >
                Update
              </Button>
              <Button
                onClick={handleDeleteItem}
                className="cursor-pointer rounded-md border border-red-500 px-3 py-1 text-sm font-medium text-red-500 transition-colors hover:bg-red-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
              >
                Delete
              </Button>
            </div>
          </div>

          <div className="text-lg font-semibold text-amber-600">
            ${(price * quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
