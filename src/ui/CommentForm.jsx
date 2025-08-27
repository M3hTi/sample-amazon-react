import { useForm } from "react-hook-form";

import { useUser } from "../features/authentication/useUser";
import { useComment } from "../features/products/useComment";
import Error from "./Error";

function CommentForm({ productId }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const { user } = useUser();
  const { createComment } = useComment();

  const {
    id,
    user_metadata: { fullName },
  } = user;

  function submit(data) {
    const newComment = {
      author: fullName,
      description: data.comment,
      product_id: productId,
      user_id: id,
    };

    createComment(newComment, {
      onSettled: () => {
        reset();
      },
    });
  }

  function error(err) {
    console.log(err);
  }
  return (
    <form
      onSubmit={handleSubmit(submit, error)}
      className="mx-auto mt-8 max-w-2xl rounded-lg bg-white p-6 shadow-md"
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="comment"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Your Opinion:
          </label>
          <textarea
            name="comment"
            id="comment"
            className="min-h-[120px] w-full resize-y rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            placeholder="Share your thoughts about this product..."
            {...register("comment", {
              required: "Please enter your opinion before submitting",
              minLength: {
                value: 20,
                message: "Your comment should be at least 20 characters long",
              },
            })}
          ></textarea>
          {errors?.comment?.message && (
            <div className="mt-2">
              <Error>{errors?.comment?.message}</Error>
            </div>
          )}
        </div>

        <button
          disabled={isSubmitting}
          className="w-full rounded-lg bg-yellow-400 px-6 py-3 text-center text-base font-semibold text-gray-900 shadow-sm transition-colors hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Comment"}
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
