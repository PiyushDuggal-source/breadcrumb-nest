import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 2; // fixed range around current page

    const range = [
      Math.max(2, currentPage - delta),
      Math.min(totalPages - 1, currentPage + delta),
    ];

    // Always include first page
    pages.push(1);

    // Add left dots
    if (range[0] > 2) {
      pages.push("...");
    }

    // Middle pages
    for (let i = range[0]; i <= range[1]; i++) {
      pages.push(i);
    }

    // Add right dots
    if (range[1] < totalPages - 1) {
      pages.push("...");
    }

    // Always include last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <div className="flex items-center justify-center mt-6 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
      >
        Prev
      </button>
      {pages.map((page, idx) =>
        typeof page === "string" ? (
          <span key={idx} className="px-2">
            {page}
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ),
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
