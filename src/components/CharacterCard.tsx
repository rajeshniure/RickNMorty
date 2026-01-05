import { useEffect, useState } from "react";
// import rickImg from "../assets/rick.png"; 
import { MdFavorite } from "react-icons/md";
import Axios,{  AxiosError } from "axios";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

function CharactersCard() {

  const [characters, setCharacters] = useState<Character[]>([]);
  const [dataIsLoading, setDataIsLoading] = useState(true);

  useEffect(() => {
    
    async function GetCharacters() {
      try {
        const response = await Axios.get(
          "https://rickandmortyapi.com/api/character",
        );
         console.log(response.data);
        setCharacters(response.data.results);
        setDataIsLoading(false);
      } catch (error) {
        const err = error as AxiosError;
        console.log(err.response);
      }
    }
    GetCharacters();
    
  }, []);

  if (dataIsLoading === false) {
    console.log(characters);
  }
  if (dataIsLoading === true) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
    <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6 
        place-items-center
      ">
    {characters.map((character: Character) => (
       <div className="w-72 rounded-xl overflow-hidden shadow-lg bg-black">
      <div className="relative">
        <img
          src={character.image}
          alt="Rick Sanchez"
          className="w-full h-70 object-cover"
        />
        
        <div className="absolute top-2 right-2  bg-gray-500 rounded-full p-1 hover:bg-gray-700">
          <MdFavorite className="text-3xl text-white hover:text-lime-400" />
        </div>
      </div>

      <div className="relative bg-lime-400 p-4">
        <p className="text-black font-semibold">
          Name : <span className="font-normal">{character.name}</span>
        </p>
        <p className="text-black font-semibold">
          Status : <span className="font-normal">{character.status}</span>
        </p>
        <p className="text-black font-semibold">
          Species : <span className="font-normal">{character.species}</span>
        </p>
        <p className="text-black font-semibold">
          Gender : <span className="font-normal">{character.gender}</span>
        </p>

        <button className="absolute right-3 bottom-18 bg-black text-lime-400 w-15 h-15 rounded-full flex items-center justify-center font-bold">
          View
        </button>
      </div>
    </div>
    ))}
    </div>
    </>
  );
}

export default CharactersCard;
