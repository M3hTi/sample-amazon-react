import supabase from "./supaBaseClient";

export async function fetchProducts() {
  try {
    let { data: products, error } = await supabase.from("products").select("*");
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
