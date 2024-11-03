import { DataTable } from "../../components/data-table/DataTable";
import { Pagination } from "../../components/pagination/Pagination";
import { SearchInput } from "../../components/search-input/SearchInput";
import { useTable } from "../../hooks/useTable";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { searchUsers, clearUsers } from "../../store/slices/githubSlice";
import { TableParams } from "../../libs/types";
import { USER_COLUMNS } from "./user-column";
import { ErrorMessage } from "../../components/error-message/ErrorMessage";
import { getTableMessage } from "../../libs/utils";

export const GithubPage = () => {
  const dispatch = useAppDispatch();
  const { users, totalCount, isLoading, error } = useAppSelector(
    (state) => state.github
  );

  const handleTableChange = (params: TableParams) => {
    const { query, page, pageSize } = params;
    if (!query) {
      dispatch(clearUsers());
      return;
    }
    dispatch(
      searchUsers({
        query,
        page,
        pageSize,
      })
    );
  };

  const {
    currentPage,
    searchQuery,
    pageSize,
    totalPages,
    handlePageChange,
    handleSearch,
  } = useTable({
    totalCount,
    onTableChange: handleTableChange,
  });

  return (
    <div className="layout-container">
      <div className="flex flex-col sm:flex-row gap-4">
        <SearchInput
          onSearch={handleSearch}
          isLoading={isLoading}
          placeholder="Search users..."
        />
        <ErrorMessage message={error} className="w-fit" />
      </div>

      <DataTable
        columns={USER_COLUMNS}
        data={users}
        isLoading={isLoading}
        emptyMessage={getTableMessage(error, searchQuery)}
      />

      {users.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalCount}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          disabled={isLoading || !!error}
        />
      )}
    </div>
  );
};
