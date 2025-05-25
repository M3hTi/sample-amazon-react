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

  // Get unique categories from products
  const categories = [
    ...new Set(products?.map((product) => product.category) || []),
  ];

  return (
    <div className="flex w-full gap-8">
      {/* Categories sidebar */}
      <div className="hidden xl:block xl:w-72 xl:flex-shrink-0">
        <div className="sticky top-24 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Categories
          </h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label
                key={category}
                className="group flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 cursor-pointer rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="min-w-0 flex-1">
        <Show as={Fragment}>
          <Show.If condition={isLoading}>
            <Spinner />
          </Show.If>
          <Show.If condition={isError}>
            <Error />
          </Show.If>
          <Show.Else as={Fragment}>
            <h2 className="mb-8 text-2xl font-bold">Products</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {products?.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </Show.Else>
        </Show>
      </div>
    </div>
  );
}

export default Home;
