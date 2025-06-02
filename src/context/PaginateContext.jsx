import { createContext, useContext, useState } from "react";

import { PAGE_SIZE } from "../utils/constans";

const PaginateContext = createContext();

function PaginateProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * PAGE_SIZE;

  const endIndex = startIndex + PAGE_SIZE;

  return (
    <PaginateContext.Provider
      value={{ currentPage, setCurrentPage, startIndex, endIndex }}
    >
      {children}
    </PaginateContext.Provider>
  );
}

export function usePaginate() {
  const context = useContext(PaginateContext);
  return context;
}

export default PaginateProvider;
