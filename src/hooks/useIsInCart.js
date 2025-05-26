import { useEffect, useState } from "react";

export function useIsInCart(shoppingCart, id) {
  const [isAlreadyInYourCart, setIsAlreadyInYourCart] = useState(false);

  useEffect(() => {
    const isProductExist = shoppingCart.some((item) => item.id === id);
    if (isProductExist) {
      setIsAlreadyInYourCart(true);
    } else {
      setIsAlreadyInYourCart(false);
    }
  }, [id, shoppingCart]);

  return { isAlreadyInYourCart };
}
