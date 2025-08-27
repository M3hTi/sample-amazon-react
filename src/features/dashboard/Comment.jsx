import Button from "../../ui/Button";
import { useDeleteComment } from "./useDeleteComment";

function Comment({ comment }) {
  const { author, description, id } = comment;

  const { deleteComment, isDeleting } = useDeleteComment();

  return (
    <div key={comment.id} className="rounded-lg bg-white p-6 shadow-md">
      <div className="flex items-center justify-between">
        <div className="mb-4 flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
            <span className="font-semibold text-amber-600">
              {author[0].toUpperCase()}
            </span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">{author}</h3>
          </div>
        </div>
        <Button
          onClick={() => deleteComment(id)}
          className="cursor-pointer rounded bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-600"
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </Button>
      </div>
      <p className="leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

export default Comment;
