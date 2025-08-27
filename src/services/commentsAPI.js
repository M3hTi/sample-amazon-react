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

export async function readComments(productId, userId) {
  try {
    let query = supabase.from("comments").select("*");

    if (productId) {
      query = query.eq("product_id", productId);
    }
    if (userId) {
      query = query.eq("user_id", userId);
    }

    let { data: comments, error } = await query;

    if (error) {
      throw new Error(
        `we couldn't fetch comments at this point, Please try again later!`,
      );
    }

    return comments || [];
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function deleteComment(commentID) {
  try {
    const { error } = await supabase
      .from("comments")
      .delete()
      .eq("id", commentID)
      .single();

    if (error)
      throw new Error(
        `You couldn't delete this comment at this moment, pls try again later!`,
      );
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
