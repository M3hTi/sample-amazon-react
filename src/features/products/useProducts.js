import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "../../services/fetchProducts";

export function useProducts() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return { data, isLoading, isError };
}
