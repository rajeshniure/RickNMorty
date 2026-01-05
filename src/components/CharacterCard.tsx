import FavoriteIcon from "./FavoriteIcon";
import { type Character } from "../types/character";
import { useNavigate } from "react-router-dom";

interface CharacterCardProps {
  character: Character;
}

function CharactersCard({ character }: CharacterCardProps) {
  const Navigate = useNavigate();

  return (
    <>
      <div key={character.id} className="w-full rounded-xl overflow-hidden ">
        <div className="relative">
          <img
            src={character.image}
            alt="Rick Sanchez"
            className="w-full h-70 object-cover"
          />
          <FavoriteIcon />
        </div>

        <div className="relative bg-lime-400 px-3 pt-5 pb-3 ">
          <p className="text-black font-semibold w-3xl">
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

          <button
            onClick={() => Navigate(`/character/${character.id}`)}
            className="absolute right-3 bottom-27 bg-black text-lime-400 w-15 h-15 rounded-full flex items-center justify-center font-bold shadow-md
                  transition-all duration-300
                  hover:bg-lime-400
                  hover:text-black
                  hover:scale-110
                  active:scale-95
                  cursor-pointer"
          >
            View
          </button>
        </div>
      </div>
    </>
  );
}

export default CharactersCard;
