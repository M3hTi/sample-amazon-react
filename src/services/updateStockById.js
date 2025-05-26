import supabase from "./supaBaseClient";

/**
 * Updates the stock quantity of a product by its ID.
 * Decreases, increases, or potentially handles a 'delete' operation based on the operation parameter.
 * Note: The current implementation updates the 'inStock' value.
 *
 * @param {string | number} id - The ID of the product to update.
 * @param {number} [quantity=0] - The amount to increase or decrease the stock by. Defaults to 0.
 * @param {"decrease" | "increase" | "delete"} [operation="decrease"] - The operation to perform ('increase', 'decrease', or 'delete'). Defaults to 'decrease'.
 * @throws {Error} Throws an error if reading or updating the data fails.
 */
export async function updateStockById(id, quantity, operation = "decrease") {
  try {
    const { data: currentData, error: fetchError } = await supabase
      .from("products")
      .select("inStock")
      .eq("id", id)
      .single();

    if (fetchError)
      throw new Error(`couldn't Read the Data, message: ${fetchError.message}`);

    console.log(currentData.inStock);

    const newStock =
      operation === "increase"
        ? currentData.inStock + quantity
        : operation === "decrease"
          ? currentData.inStock - quantity
          : currentData.inStock + quantity;

    // const newStock = currentData.inStock - quantity;
    const { data, error } = await supabase
      .from("products")
      .update({ inStock: newStock })
      .eq("id", id)
      .select();
    if (error)
      throw new Error(`we couldn't update product, message: ${error.message}`);
  } catch (error) {
    console.log(error.message);
    throw error.message;
  }
}
