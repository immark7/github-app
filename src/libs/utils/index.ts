import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTableMessage = (
  error: string | null,
  searchQuery: string
): string => {
  if (error) return error;
  if (!searchQuery) return "Search users to see more results";
  return "No matching results";
};

export const getVisiblePages = (
  currentPage: number,
  totalPages: number
): number[] => {
  const VISIBLE_PAGES = 5;
  const HALF_PAGES = 2;

  if (totalPages <= VISIBLE_PAGES) {
    return [...Array(totalPages)].map((_, i) => i + 1);
  }

  // At the start
  if (currentPage <= HALF_PAGES + 1) {
    return [1, 2, 3, 4, 5];
  }

  // At the end
  if (currentPage >= totalPages - HALF_PAGES) {
    const start = totalPages - VISIBLE_PAGES + 1;
    return [start, start + 1, start + 2, start + 3, start + 4];
  }

  // In middle
  return [
    currentPage - HALF_PAGES,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + HALF_PAGES,
  ];
};
