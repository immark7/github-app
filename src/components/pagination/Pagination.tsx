import { FunctionComponent } from "react";
import { getVisiblePages } from "../../libs/utils";
import { Button } from "../ui/button/Button";

interface Props {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

export const Pagination: FunctionComponent<Props> = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  disabled,
}) => {
  const startIndex = Math.min((currentPage - 1) * pageSize + 1, totalItems);
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems);
  const visiblePages = getVisiblePages(currentPage, totalPages);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex items-center justify-between py-3 px-2">
      <span className="text-sm text-muted-foreground">
        Showing {startIndex} - {endIndex} of {totalItems}
      </span>

      <div className="flex gap-1">
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={disabled || isFirstPage}
        >
          Previous
        </Button>

        {visiblePages.map((page) => {
          const isActive = currentPage === page;
          return (
            <Button
              key={page}
              variant={isActive ? "default" : "outline"}
              onClick={() => onPageChange(page)}
              disabled={disabled || isActive}
              className="h-9 w-9 p-0"
            >
              {page}
            </Button>
          );
        })}

        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={disabled || isLastPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
