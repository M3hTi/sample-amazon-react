import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteComment as deleteCommentApi } from "../../services/commentsAPI";

export function useDeleteComment() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteComment,
    isPending: isDeleting,
    isError,
    error,
  } = useMutation({
    mutationFn: (id) => deleteCommentApi(id),

    onSuccess: () => {
      toast.success("You successfully delete comment");
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteComment, isDeleting, isError, error };
}
