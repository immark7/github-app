import { useState, FunctionComponent, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import { DEBOUNCED_TIME } from "../../libs/constants";
import { useDebounce } from "../../hooks/useDebounce";

interface Props {
  onSearch: (text: string) => void;
  isLoading?: boolean;
  placeholder?: string;
  minCharacters?: number;
}

export const SearchInput: FunctionComponent<Props> = ({
  onSearch,
  isLoading = false,
  placeholder = "Search...",
  minCharacters = 0,
}) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, DEBOUNCED_TIME);

  useEffect(() => {
    const validQuery = debouncedValue.trim();

    if (validQuery.length >= minCharacters) {
      onSearch(validQuery);
    } else if (validQuery.length === 0) {
      onSearch("");
    }
  }, [debouncedValue, minCharacters]);

  return (
    <div className="relative w-full sm:w-96">
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
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-3 py-2 bg-background border rounded-lg focus:outline-none"
      />
    </div>
  );
};
