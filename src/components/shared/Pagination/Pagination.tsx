"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
interface PaginationProps {
  itemsPerPage?: number;
  totalItems?: number;
  className?: string;
  onPageChange?: (currentPage: number) => void;
}

export default function Pagination({
  itemsPerPage = 10,
  totalItems = 50,
  className,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5];
    }

    if (currentPage >= totalPages - 2) {
      return [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];
  };

  const pageNumbers = getPageNumbers();

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 md:gap-4",
        className
      )}
    >
      <button
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
          "text-[#7D7F80] bg-[#EAF0F3] hover:bg-gray-100",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent",
          "md:h-12 md:w-12"
        )}
        aria-label="Previous page"
      >
        <GoArrowLeft className="h-5 w-5" />
      </button>

      <div className="flex items-center gap-1 md:gap-2">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors md:h-12 md:w-12 md:text-base",
              currentPage === page
                ? "bg-[#004b6b] text-white"
                : "text-gray-500 hover:bg-gray-100"
            )}
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page.toString().padStart(2, "0")}
          </button>
        ))}
      </div>

      <button
        onClick={() =>
          currentPage < totalPages && handlePageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full transition-colors ",
          "bg-[#EAF0F3] text-gray-500 hover:bg-gray-100",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent",
          "md:h-12 md:w-12"
        )}
        aria-label="Next page"
      >
        <GoArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
