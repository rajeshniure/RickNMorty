import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { type Character } from "../types/character";
import {getCharacterById, getEpisodesByUrls, type Episode} from "../api/rickNMortyAPI";
import Loading from "../components/Loading";
import DetailCard from "../components/DetailCard";


export default function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function loadCharacter() {
      try {
        const charData = await getCharacterById(id as string);
        if (!charData) return;

        setCharacter(charData);

        const episodeData = await getEpisodesByUrls(charData.episode);
        setEpisodes(episodeData);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    loadCharacter();
  }, [id]);

  if (isLoading || !character) return <Loading message="Fetching character details..." />;

  return (
    <>
    <h1 className="text-4xl text-center font-bold text-emerald-400">Know more about {character.name}</h1>
    <DetailCard character={character} episodes={episodes} />
    
    </>
  );
}
