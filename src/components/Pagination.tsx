import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex bg-white justify-end rounded-b-lg">
      {currentPage !== 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="flex items-center px-4 py-2 text-sm bg-none  focus:outline-none focus:ring-2 focus:ring-yellow-500 mr-auto font-bold"
        >
          ← Previous
        </button>
      )}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="flex items-center px-4 py-2 text-sm bg-none focus:outline-none focus:ring-2 focus:ring-yellow-500 font-bold"
        >
          Next →
        </button>
      )}
    </div>
  );
};
