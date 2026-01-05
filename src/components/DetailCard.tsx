import { type Character } from "../types/character";
import FavoriteIcon from "./FavoriteIcon";

interface Episode {
  id: number;
  name: string;
  episode: string;
}

interface CharacterDetailCardProps {
  character: Character;
  episodes: Episode[];
}

function DetailCard({ character, episodes }: CharacterDetailCardProps) {
  return (
    <div className="max-w-5xl mx-auto mt-10 bg-neutral-900 text-white rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-lg">
      <div className="relative">
        <img
          src={character.image}
          alt={character.name}
          className="w-full rounded-xl object-cover"
        />

        <FavoriteIcon />
      </div>

      <div className="flex flex-col justify-between  bg-lime-400 rounded-xl p-6 text-black">
        <div>
          <h1 className="text-3xl font-bold mb-4">{character.name}</h1>

          <p className="mb-1">
            <strong>Status:</strong> {character.status}
          </p>
          <p className="mb-1">
            <strong>Species:</strong> {character.species}
          </p>
          {character.type && (
            <p className="mb-1">
              <strong>Type:</strong> {character.type}
            </p>
          )}
          <p className="mb-1">
            <strong>Gender:</strong> {character.gender}
          </p>
          <p className="mb-1">
            <strong>Origin:</strong> {character.origin.name}
          </p>
          <p className="mb-4">
            <strong>Location:</strong> {character.location.name}
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2">Episodes:</h2>
          <ul
            className="list-disc list-inside 
            max-h-40 overflow-y-auto 
            text-sm
            scrollbar-thin scrollbar-thumb-lime-800 scrollbar-track-lime-400
            hover:scrollbar-thumb-lime-800
            p-1"
          >
            {episodes.map((ep) => (
              <li key={ep.id}>
                {ep.episode}: {ep.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
