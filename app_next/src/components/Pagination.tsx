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
    <nav
      className="flex items-center justify-between py-4 px-2 md:px-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {start}-{end}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {total} items
        </span>
      </span>
      <ul className="inline-flex -space-x-px text-sm h-8">
        <li>
          <button
            disabled={currentPage <= 1}
            onClick={() => changePage(currentPage - 1)}
            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white"
            aria-label="Previous"
          >
            Previous
          </button>
          {/* </a> */}
        </li>
        {pages.map((page, index) => (
          <li key={index}>
            <button
              onClick={() => page !== "..." && changePage(page)}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === page ? "opacity-50" : "..."
              } ${
                page === "..."
                  ? "flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  : "..."
              }`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage >= totalPages}
            onClick={() => changePage(currentPage + 1)}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white"
            aria-label="Next"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

// <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-black dark:bg-gray-800">
// <span className="flex items-center col-span-3">
//   Showing {start}-{end} of {total} items
// </span>
// <span className="col-span-2"></span>
// {/* Pagination */}
// <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
//   <nav aria-label="Table navigation">
//     <ul className="inline-flex items-center">
//       <li>
//         <button
//           disabled={currentPage <= 1}
//           onClick={() => changePage(currentPage - 1)}
//           className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
//           aria-label="Previous"
//         >
//           <svg
//             className="w-4 h-4 fill-current"
//             aria-hidden="true"
//             viewBox="0 0 20 20"
//           >
//             <path
//               d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//               clipRule="evenodd"
//               fillRule="evenodd"
//             ></path>
//           </svg>
//         </button>
//       </li>
//       {pages.map((page, index) => (
//         <li key={index}>
//           <button
//             onClick={() => page !== "..." && changePage(page)}
//             className={`px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple ${
//               currentPage === page
//                 ? "text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600"
//                 : "..."
//             } ${page === "..." ? "opacity-50 disable" : "..."}`}
//           >
//             {page}
//           </button>
//         </li>
//       ))}
//       <li>
//         <button
//           disabled={currentPage >= totalPages}
//           onClick={() => changePage(currentPage + 1)}
//           className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
//           aria-label="Next"
//         >
//           <svg
//             className="w-4 h-4 fill-current"
//             aria-hidden="true"
//             viewBox="0 0 20 20"
//           >
//             <path
//               d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//               clipRule="evenodd"
//               fillRule="evenodd"
//             ></path>
//           </svg>
//         </button>
//       </li>
//     </ul>
//   </nav>
// </span>
// </div>
