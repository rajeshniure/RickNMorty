import CharacterCard from "../components/CharacterCard"
import { useEffect, useState } from "react";
import { getCharacters } from "../api/rickNMortyAPI";
import { type Character } from "../types/character";
import Loading from "../components/Loading";

function Home() {
   
  const [characters, setCharacters] = useState<Character[]>([]);
    const [dataIsLoading, setDataIsLoading] = useState(true);
  
    useEffect(() => {
      async function fetchData() {
        const results = await getCharacters();
        setCharacters(results);
        setDataIsLoading(false);
      }
  
      fetchData();
    }, []);
  
    if (dataIsLoading) {
      return <Loading message="Fetching characters..." />;
    }

  return (
    <div className="max-w-7xl mx-auto">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
      {characters.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
    </div>
  )
}

export default Home