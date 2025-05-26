import { useLocalStorage } from "react-haiku";

import { formatCurrency } from "../utils/helpers";
import CartItem from "./CartItem";

function CartItems() {
  const [shoppingCart, setShoppingCart] = useLocalStorage("cart", []);

  const totalPrice = shoppingCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="flex flex-col">
      {shoppingCart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
          <span className="text-lg font-medium text-gray-700">
            Total Price:
          </span>
          <span className="text-2xl font-bold text-amber-600">
            {formatCurrency(totalPrice)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
