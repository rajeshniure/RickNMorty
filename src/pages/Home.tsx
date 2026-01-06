import CharacterCard from "../components/CharacterCard"
import { useEffect, useState } from "react";
import { getCharacters } from "../api/rickNMortyAPI";
import { type Character } from "../types/character";
import Loading from "../components/Loading";
import CharacterFilter from "../components/CharacterFilter";

function Home() {
   
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
   useEffect(() => {
    async function fetchCharacters() {
      if (isLoading || !hasMore) return;

      setIsLoading(true);
      const results = await getCharacters(page);

      if (results.length === 0) {
        setHasMore(false);
      } else {
        setCharacters((prev) => [...prev, ...results]);
      }

      setIsLoading(false);
    }

    fetchCharacters();
  }, [page]);

  
    useEffect(() => {
    function handleScroll() {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200;

      if (nearBottom && !isLoading && hasMore) {
        setPage((prev) => prev + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore]);

  return (
    <>
    <CharacterFilter status="" species="" gender="" setStatus={() => {}} setSpecies={() => {}} setGender={() => {}}  />
    <div className="max-w-7xl mx-auto">
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

        {!hasMore && (
          <p className="text-center text-neutral-400 mt-6 text-xl">
            No more characters
          </p>
        )}
    </div>
    </>
  )
}

export default Home