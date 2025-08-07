import { Fragment, useEffect, useMemo, useState } from "react";
import { Show } from "react-smart-conditional";

import { usePaginate } from "../../context/PaginateContext.jsx";
import Error from "../../ui/Error.jsx";
import Pagination from "../../ui/Pagination.jsx";
import Spinner from "../../ui/Spinner.jsx";
import Product from "./Product.jsx";
import { useProducts } from "./useProducts.js";

function Home() {
  const { currentPage, setCurrentPage, startIndex, endIndex } = usePaginate();

  const [selectedcategories, setSelectedCategories] = useState([]);

  const { data, isLoading, isError } = useProducts();
  // Get unique categories from products
  const categories = Array.isArray(data)
    ? [...new Set(data.map((product) => product.category))]
    : [];

  /**
   * Filters the products based on the selected categories.
   * If no categories are selected, all products are returned.
   */
  const products = useMemo(() => {
    return Array.isArray(data)
      ? data?.filter((product) =>
          selectedcategories.length > 0
            ? selectedcategories.includes(product.category)
            : true,
        )
      : [];
  }, [data, selectedcategories]);

  /**
   * Toggles the category filter based on the checkbox state.
   * Adds the category to the state if checked, removes it if unchecked.
   * @param {object} e - The event object from the checkbox change.
   */
  function toggleCategoryFilter(e) {
    setSelectedCategories((categories) =>
      categories.includes(e.target.value)
        ? categories.filter((category) => category !== e.target.value)
        : [...categories, e.target.value],
    );
  }

  // for paginatelogic
  const [productsByPaginate, setProductsByPaginate] = useState(products || []);

  useEffect(() => {
    setProductsByPaginate(products.slice(startIndex, endIndex));
  }, [currentPage, selectedcategories, startIndex, endIndex, products]);

  // Reset pagination to first page whenever categories filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedcategories, setCurrentPage]);

  return (
    <div className="flex w-full gap-8 pt-10">
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
                  value={category}
                  onChange={toggleCategoryFilter}
                  checked={selectedcategories.includes(category)}
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
              {productsByPaginate?.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-10 flex items-center justify-center">
              <Pagination counter={products.length || 0} />
            </div>
          </Show.Else>
        </Show>
      </div>
    </div>
  );
}

export default Home;
