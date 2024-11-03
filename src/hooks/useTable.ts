import { useState } from "react";
import { TableParams } from "../libs/types";
import { PAGE_SIZE } from "../libs/constants";

interface Options {
  totalCount: number;
  pageSize?: number;
  onTableChange: (params: TableParams) => void;
}

export const useTable = ({ totalCount, onTableChange }: Options) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(PAGE_SIZE);
  const [searchQuery, setSearchQuery] = useState("");

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onTableChange({
      query: searchQuery,
      page,
      pageSize,
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    onTableChange({
      query,
      page: 1,
      pageSize,
    });
  };

  return {
    currentPage,
    pageSize,
    totalPages,
    searchQuery,
    handlePageChange,
    handleSearch,
  };
};
