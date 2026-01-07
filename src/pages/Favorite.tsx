import { useFavorite } from "../context/FavoriteContext";
import CharacterCard from "../components/CharacterCard";
import { Link, useSearchParams } from "react-router-dom";

function Favorite() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const { favorite } = useFavorite();

  const filtered = favorite.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filtered.length === 0) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4">
          <p className="text-center text-neutral-400 text-lg sm:text-xl">
            {searchTerm
              ? "No favorite characters match your search"
              : "No favorite characters yet, please add some!"}
          </p>

          <Link
            to="/"
            className="px-6 py-3 bg-emerald-400 text-neutral-900 font-semibold rounded-md hover:bg-emerald-500 transition"
          >
            Go Back Home
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-6">
      <h1 className="text-3xl text-white mb-6 font-bold text-center">
        Your Favorite Character
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
