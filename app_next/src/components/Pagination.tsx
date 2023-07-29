import React, { useState } from "react";

interface PaginationProps {
  total: number;
  perPage: number;
  currentPage: number;
  updatePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  perPage,
  currentPage,
  updatePage,
}) => {
  const start = (currentPage - 1) * perPage + 1;
  const totalPages = Math.ceil(total / perPage);
  const [end, setEnd] = useState<number>(currentPage * perPage);

  if (end > total) {
    setEnd(total);
  }

  const pages: any[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 2 && i <= currentPage + 2)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "..." && i < currentPage - 2) {
      pages.push("...");
    } else if (pages[pages.length - 1] === "..." && i > currentPage + 2) {
      pages.push("...");
    }
  }

  const changePage = (page: number) => {
    updatePage(page);
  };

  return (
    <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
      <span className="flex items-center col-span-3">
        Showing {start}-{end} of {total} items
      </span>
      <span className="col-span-2"></span>
      {/* Pagination */}
      <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label="Table navigation">
          <ul className="inline-flex items-center">
            <li>
              <button
                disabled={currentPage <= 1}
                onClick={() => changePage(currentPage - 1)}
                className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                aria-label="Previous"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            {pages.map((page, index) => (
              <li key={index}>
                <button
                  onClick={() => page !== "..." && changePage(page)}
                  className={`px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple ${
                    currentPage === page
                      ? "text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600"
                      : "..."
                  } ${page === "..." ? "opacity-50 disable" : "..."}`}
                >
                  {page}
                </button>
              </li>
            ))}
            <li>
              <button
                disabled={currentPage >= totalPages}
                onClick={() => changePage(currentPage + 1)}
                className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                aria-label="Next"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </span>
    </div>
  );
};

export default Pagination;
