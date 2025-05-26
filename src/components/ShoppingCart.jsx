import { useEffect } from "react";
import { useLocalStorage } from "react-haiku";
import { GrFormClose } from "react-icons/gr";

import { useOverlay } from "../context/Overlay";
import { useOutsideClick } from "../hooks/useOutSideClick";
import Button from "../ui/Button";
import Message from "../ui/Message";
import CartItems from "./CartItems";

function ShoppingCart() {
  const [shoppingCart, setShoppingCart] = useLocalStorage("cart", []);

  const { ref } = useOutsideClick(() => setIsOpen(false));

  const { setIsOpen } = useOverlay();

  // Close the shopping cart when the Escape key is pressed
  useEffect(() => {
    function handleKeyDown(e) {
      console.log(e);
      if (e.code === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);

  return (
    <div
      ref={ref}
      className="fixed top-1/2 left-1/2 z-100 w-xs -translate-x-1/2 -translate-y-1/2 transform bg-white px-2 py-8 shadow-2xl shadow-black/25 sm:w-xl md:w-2xl lg:w-3xl"
    >
      <div className="absolute top-0 right-0">
        <Button className="cursor-pointer" onClick={() => setIsOpen(false)}>
          <GrFormClose className="text-3xl" />
        </Button>
      </div>
      {shoppingCart.length === 0 ? (
        <Message>Your Cart is Empty.</Message>
      ) : (
        <CartItems />
      )}
    </div>
  );
}

export default ShoppingCart;
