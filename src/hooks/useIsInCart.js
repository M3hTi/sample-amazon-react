import { useEffect, useState } from "react";

export function useIsInCart(shoppingCart, id) {
  const [isAlreadyInYourCart, setIsAlreadyInYourCart] = useState(false);

  useEffect(() => {
    const isProductExist = shoppingCart.some((item) => item.id === id);
    if (isProductExist) {
      setIsAlreadyInYourCart(true);
    }
  }, [id, shoppingCart]);

  return { isAlreadyInYourCart };
}
