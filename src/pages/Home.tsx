import CharacterCard from "../components/CharacterCard";
import { useEffect, useState } from "react";
import { getCharacters } from "../api/rickNMortyAPI";
import { type Character } from "../types/character";
import Loading from "../components/Loading";
import CharacterFilter from "../components/CharacterFilter";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get("search") || "";
  const status = searchParams.get("status") || "";
  const species = searchParams.get("species") || "";
  const gender = searchParams.get("gender") || "";

  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCharacters([]);
    setPage(1);
    setHasMore(true);
  }, [searchTerm, status, species, gender]);

  useEffect(() => {
    async function fetchCharacters() {
      if (isLoading || !hasMore) return;

      setIsLoading(true);
      const results = await getCharacters(
        page,
        searchTerm,
        status,
        species,
        gender
      );

      if (results.length === 0) {
        setHasMore(false);
      } else {
        setCharacters((prev) => [...prev, ...results]);
      }

      setIsLoading(false);
    }

    fetchCharacters();
  }, [page, searchTerm, status, species, gender]);

  useEffect(() => {
    function handleScroll() {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (nearBottom && !isLoading && hasMore) {
        setPage((prev) => prev + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore]);

  return (
    <>
      <CharacterFilter />
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {characters.map((character: Character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        {isLoading && (
          <div className="mt-6">
            <Loading message="Loading more characters..." />
          </div>
        )}

        {!hasMore && characters.length > 0 && (
          <p className="text-center text-neutral-400 mt-6 text-xl">
            No more characters
          </p>
        )}

        {characters.length === 0 && !isLoading && (
          <p className="text-center text-neutral-400 mt-10 text-xl">
            No characters found for "{searchTerm}"
          </p>
        )}
      </div>
    </>
  );
}

export default Home;
