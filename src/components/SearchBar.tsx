import { FiSearch } from "react-icons/fi";
import useDebounce from "../hooks/useDebounce";
import { useEffect, useState } from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
}

function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  const [input, setInput] = useState(searchTerm);
  const debouncedInput = useDebounce(input, 500);
  

  useEffect(() => {
    setSearchTerm(debouncedInput);
  }, [debouncedInput, setSearchTerm]);

  return (
    <div className="w-md mx-auto">
      <div
        className="
          flex items-center gap-3
          w-full
          px-0 py-3
          bg-neutral-800
          border-b-3 border-gray-400
          transition-all duration-300
          focus-within:border-lime-500
          focus-within:ring-lime-100
        "
      >
        <FiSearch className="text-xl text-gray-400 transition-colors duration-300 focus-within:text-lime-500" />

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
            text-sm
          "
        />
      </div>
    </div>
  );
}

export default SearchBar;
