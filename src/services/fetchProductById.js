import supabase from "./supaBaseClient";

export async function fetchProductById(id) {
  try {
    const { data: product, error: fetchError } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError) {
      throw new Error(`Failed to fetch product: ${fetchError.message}`);
    }

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
