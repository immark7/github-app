import React, { useState, FunctionComponent } from "react";
import { debounce } from "lodash";
import { Search, Loader2 } from "lucide-react";
import { DEBOUNCED_TIME } from "../../libs/constants";

interface Props {
  onSearch: (text: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export const SearchInput: FunctionComponent<Props> = ({
  onSearch,
  isLoading = false,
  placeholder = "Search...",
}) => {
  const [value, setValue] = useState("");

  const debouncedSearch = debounce((query: string) => {
    onSearch(query);
  }, DEBOUNCED_TIME);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedSearch(newValue);
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {isLoading ? (
          <Loader2 className="h-5 w-5 text-gray-9 animate-spin" />
        ) : (
          <Search className="h-5 w-5 text-gray-9" />
        )}
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-3 py-2 bg-background border rounded focus:outline-none"
      />
    </div>
  );
};
