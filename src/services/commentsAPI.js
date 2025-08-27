import supabase from "./supaBaseClient";

export async function createComment(newComment) {
  try {
    const { product_id, user_id, author, description } = newComment;
    const { data, error } = await supabase
      .from("comments")
      .insert([{ author, description, product_id, user_id }])
      .select();

    if (error) {
      throw new Error(
        `You couldn\`t create comment at this moment, Error: ${error.message}`,
      );
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function readComments(productId) {
  try {
    let { data: comments, error } = await supabase
      .from("comments")
      .select("*")
      .eq("product_id", productId);

    if (error)
      throw new Error(
        `we couldn't fect comments at this point, Please try again later!`,
      );

    return comments;
  } catch (error) {
    console.log(error.message);
  }
}
