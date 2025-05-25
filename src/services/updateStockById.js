import supabase from "./supaBaseClient";

/**
 * Updates the stock quantity of a product by its ID.
 * Fetches the current stock, calculates the new stock by subtracting the given quantity,
 * and updates the database record.
 *
 * @param {number | string} id The ID of the product to update.
 * @param {number} quantity The amount to subtract from the current stock.
 * @throws {string} Throws an error message string if fetching or updating fails.
 */
export async function updateStockById(id, quantity) {
  try {
    const { data: currentData, error: fetchError } = await supabase
      .from("products")
      .select("inStock")
      .eq("id", id)
      .single();

    if (fetchError)
      throw new Error(`couldn't Read the Data, message: ${fetchError.message}`);

    const newStock = currentData.inStock - quantity;
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
