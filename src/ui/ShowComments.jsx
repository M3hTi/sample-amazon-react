import { useComments } from "../features/products/useComments";
import Error from "./Error";
import Spinner from "./Spinner";

function ShowComments({ productId }) {
  const { comments, isLoading, isError, error } = useComments(productId);

  return (
    <div className="mx-auto mt-8 max-w-2xl">
      {isLoading && <Spinner />}
      {!isLoading && isError && <Error>{error.message}</Error>}
      {!isLoading && !isError && comments.length > 0 && (
        <div className="space-y-6">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Customer Reviews
          </h2>

          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-lg bg-white p-6 shadow-md"
              >
                <div className="mb-4 flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <span className="font-semibold text-amber-600">
                      {comment.author[0].toUpperCase()}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {comment.author}
                    </h3>
                  </div>
                </div>
                <p className="leading-relaxed text-gray-600">
                  {comment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {!isLoading && !isError && comments.length === 0 && (
        <div className="py-8 text-center">
          <p className="text-gray-600">
            No reviews yet. Be the first to share your thoughts!
          </p>
        </div>
      )}
    </div>
  );
}

export default ShowComments;
