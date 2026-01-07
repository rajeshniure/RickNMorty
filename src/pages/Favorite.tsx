import { useFavorite } from "../context/FavoriteContext";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";


function Favorite() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  
  const { favorite } = useFavorite();

  const filtered = favorite.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

   if (filtered.length === 0) {
    return (
      <p className="text-center text-neutral-400 mt-10 text-xl">
        {searchTerm
          ? "No favorite characters match your search"
          : "No favorite characters yet, please add some!"}
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-6">
      <h1 className="text-3xl text-white mb-6 font-bold text-center">Your Favorite Character</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
