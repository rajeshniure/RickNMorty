import { FiSearch } from "react-icons/fi";
import useDebounce from "../hooks/useDebounce";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFromURL = searchParams.get("search") || "";

  const [input, setInput] = useState(searchFromURL);
  const debouncedInput = useDebounce(input, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedInput) {
      params.set("search", debouncedInput);
    } else {
      params.delete("search");
    }

    setSearchParams(params);
  }, [debouncedInput]);

  return (
    <div className="w-full px-4 sm:px-6 md:px-0 md:max-w-md mx-auto">
      <div
        className="
          flex items-center gap-2 sm:gap-3
          w-full
          px-3 sm:px-4
          py-2 sm:py-3
          bg-neutral-800
          border-b-2 border-gray-500
          transition-all duration-300
          focus-within:border-lime-500
        "
      >
        <FiSearch
          className="
            text-lg sm:text-xl
            text-gray-400
            transition-colors duration-300
            group-focus-within:text-lime-500
          "
        />

        <input
          type="text"
          placeholder="Search characters..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="
            w-full
            bg-transparent
            text-gray-100
            placeholder-gray-400
            outline-none
            text-sm sm:text-base
          "
        />
      </div>
    </div>
  );
}

export default SearchBar;
