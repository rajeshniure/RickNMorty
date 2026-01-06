import { useFavorite } from "../context/FavoriteContext";
import CharacterCard from "../components/CharacterCard";

function Favorite() {
  const { favorite } = useFavorite();

  if (favorite.length === 0) {
    return (
      <p className="text-center text-neutral-200 mt-10 text-3xl">
        No favorite characters yet add your favorite characters!
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-6">
      <h1 className="text-3xl  text-white mb-6 font-bold">Your Favorite</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorite.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
