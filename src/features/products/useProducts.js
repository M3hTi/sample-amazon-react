import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "../../services/fetchProducts";

export function useProducts(id = "") {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProducts(id),
  });

  return { data, isLoading, isError };
}
