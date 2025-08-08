import supabase from "./supaBaseClient";

export async function fetchProducts(id) {
  try {
    let query = supabase.from("products").select("*");

    if (id) {
      query = query.eq("id", id);
    }

    let { data: products, error } = await query;
    if (error)
      throw new Error(
        `we couldn't fect products, eror message: ${error.message}`,
      );

    return products;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
