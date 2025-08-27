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
