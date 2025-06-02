import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { usePaginate } from "../context/PaginateContext";
import { PAGE_SIZE } from "../utils/constans";
import Button from "./Button";

function Pagination({ counter }) {
  const { currentPage, setCurrentPage } = usePaginate();

  const pageCount = Math.ceil(counter / PAGE_SIZE);

  function handlePage(direction) {
    if (direction === "forward") {
      currentPage === pageCount
        ? setCurrentPage(pageCount)
        : setCurrentPage((c) => c + 1);
    } else {
      currentPage === 1 ? setCurrentPage(1) : setCurrentPage((c) => c - 1);
    }
  }

  if (pageCount === 1) return null;

  return (
    <div className="flex items-center gap-4">
      <Button
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-600 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-300"
        onClick={() => handlePage("backward")}
        disabled={currentPage === 1}
      >
        <HiChevronLeft className="h-6 w-6" />
      </Button>

      <span className="font-medium text-gray-600">
        {currentPage} of {pageCount}
      </span>

      <Button
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-600 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-300"
        onClick={() => handlePage("forward")}
        disabled={currentPage === pageCount}
      >
        <HiChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}

export default Pagination;
