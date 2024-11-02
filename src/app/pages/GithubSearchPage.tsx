import { SearchInput } from "../../components/search-input/SearchInput";
import { Table } from "../../components/table/Table";

export const GithubPage = () => {
  return (
    <main className="container mx-auto p-4">
      <SearchInput />
      <Table />
    </main>
  );
};
