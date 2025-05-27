import toast from "react-hot-toast";

import { updateStockById } from "../services/updateStockById";

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value,
  );

export function addToCart(product, quantity) {
  const { id } = product;
  // Update stock in database
  updateStockById(id, quantity);
  // Update local stock state
  // setQtyAvailabe((prev) => prev - quantity);

  const newProduct = {
    ...product,
    inStock: product.inStock - quantity,
    quantity,
  };
  toast.success(`You Added to your cart 🎉`);

  return newProduct;
}
