import { useQuery } from "@tanstack/react-query";

import { readComments } from "../../services/commentsAPI";

export function useComments(productId = "", userId = "") {
  const {
    data: comments,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => readComments(productId, userId),
    queryKey: ["comments", productId],
  });

  return { comments, isLoading, isError, error };
}
