import Error from "../../ui/Error";
import Spinner from "../../ui/Spinner";
import { useUser } from "../authentication/useUser";
import { useComments } from "../products/useComments";
import Comment from "./Comment";

function Comments() {
  const { user } = useUser();
  const { id } = user;
  const { comments, isLoading, error, isError } = useComments("", id);

  if (isLoading) return <Spinner />;
  if (!isLoading && isError) return <Error>{error.message}</Error>;

  return (
    <div className="mx-auto mt-8 max-w-2xl">
      {comments.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-gray-600">You haven't made any comments yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Your Comments
          </h2>

          <div className="space-y-4">
            {comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Comments;
