import { useState } from "react";
import { MdFavorite } from "react-icons/md";

function FavoriteIcon() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={`
        absolute top-2 right-2
        rounded-full p-1
        transition-all duration-200
        cursor-pointer
        ${
          isActive
            ? "bg-gray-700"
            : "bg-gray-500 hover:bg-gray-500"
        }
      `}
    >
      <MdFavorite
        className={`
          text-3xl
          transition-colors
          ${
            isActive ? "text-lime-400" : "text-white hover:text-lime-400"
          }
        `}
      />
    </button>
  );
}

export default FavoriteIcon;
