import { useState } from "react";
import { useLocalStorage } from "react-haiku";
import toast from "react-hot-toast";

import Button from "../ui/Button";

function CartItem({ item }) {
  const { id, image, description, name, price, quantity } = item;

  //   for controlled the uncontroll select element
  const [quantitySelector, setQuantitySelector] = useState(quantity);

  const [shoppingCart, setShoppingCart] = useLocalStorage("cart");

  function handleDeleteItem() {
    setShoppingCart((cartItems) => cartItems.filter((item) => item.id !== id));
    toast.success(`You Delete an item from your cart ⚠️`);
  }

function handleUpdateItem() {
    setShoppingCart((cartItems) =>
        cartItems.map((item) =>
            item.id === id ? { ...item, quantity: quantitySelector } : item,
        ),
    );
    toast.success(`Updated quantity for ${name} to ${quantitySelector}`);
}

  return (
    <div className="flex items-center gap-4 border-gray-200 px-2 py-4 transition-colors hover:bg-gray-50 [&:not(:last-child)]:border-b">
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

        {/* Price, Quantity and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Quantity:</span>
              <select
                value={quantitySelector}
                onChange={(e) => setQuantitySelector(+e.target.value)}
                className="rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none"
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <option value={i + 1}>{i + 1}</option>
                ))}
              </select>
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
