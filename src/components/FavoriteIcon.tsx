import { MdFavorite } from "react-icons/md";
import { useFavorite } from "../context/FavoriteContext";
import { type Character } from "../types/character";
import { memo } from "react";



function FavoriteIcon({ character }: { character: Character }) {
  const { toggleFavorite, isFavorite } = useFavorite();
  const active = isFavorite(character.id);

  return (
    <button
      onClick={() => toggleFavorite(character)}
      className={`
        absolute top-2 right-2
        rounded-full p-1
        transition-all duration-200
        cursor-pointer
        ${
          active
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
            active ? "text-lime-400" : "text-white hover:text-lime-400"
          }
        `}
      />
    </button>
  );
}

export default memo(FavoriteIcon);
