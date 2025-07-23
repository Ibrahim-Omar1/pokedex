"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

/**
 * Client component that renders pagination controls with navigation links.
 * Uses Next.js Link components for automatic prefetching and better performance.
 * Handles URL updates and maintains search parameters while navigating between pages.
 * Shows a smart range of page numbers with ellipsis for large page counts.
 *
 * @param {PaginationControlsProps} props - The component props.
 * @param {number} props.currentPage - The currently active page number.
 * @param {number} props.totalPages - The total number of pages available.
 * @param {string} props.basePath - The base URL path for pagination links.
 * @returns {JSX.Element | null} The pagination controls or null if only one page exists.
 */
export function PaginationControls({ currentPage, totalPages, basePath }: PaginationControlsProps) {
  const searchParams = useSearchParams();

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `${basePath}?${params.toString()}`;
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {currentPage > 1 ? (
        <Button asChild variant="outline" size="sm" className="cursor-pointer">
          <Link href={createPageUrl(currentPage - 1)}>
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="sm" disabled className="cursor-pointer">
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>
      )}

      <div className="flex gap-1">
        {getVisiblePages().map((page, index) => (
          <div key={index}>
            {typeof page === "number" ? (
              <Button
                asChild
                variant={page === currentPage ? "default" : "outline"}
                size="sm"
                className="min-w-[40px] cursor-pointer"
              >
                <Link href={createPageUrl(page)}>{page}</Link>
              </Button>
            ) : (
              <Button variant="outline" size="sm" disabled className="min-w-[40px] cursor-pointer">
                {page}
              </Button>
            )}
          </div>
        ))}
      </div>

      {currentPage < totalPages ? (
        <Button asChild variant="outline" size="sm" className="cursor-pointer">
          <Link href={createPageUrl(currentPage + 1)}>
            Next
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="sm" disabled className="cursor-pointer">
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
