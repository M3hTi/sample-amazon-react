import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createComment as createCommentApi } from "../../services/commentsAPI";

export function useComment() {
  const {
    mutate: createComment,
    isError,
    isPending,
    error,
  } = useMutation({
    mutationFn: (newComment) => createCommentApi(newComment),

    onSuccess: () => {
      toast.success("your comment is successfully created");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createComment, isPending, isError, error };
}
