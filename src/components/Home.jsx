import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";
import { Show } from "react-smart-conditional";

import { fetchProducts } from "../services/fetchProducts";
import Error from "../ui/Error";
import Spinner from "../ui/Spinner";
import Product from "./Product";

function Home() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <div className="w-full">
      <Show as={Fragment}>
        <Show.If condition={isLoading}>
          <Spinner />
        </Show.If>
        <Show.If condition={isError}>
          <Error />
        </Show.If>
        <Show.Else as={Fragment}>
          <h2 className="mb-6 text-2xl font-bold">Products</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </Show.Else>
      </Show>
    </div>
  );
}

export default Home;
