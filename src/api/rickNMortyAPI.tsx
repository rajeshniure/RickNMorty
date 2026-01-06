import Axios from "axios";
import { type Character } from "../types/character";

const API_BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters(page = 1, name = "",status = "", species = "", gender = ""): Promise<Character[]> {
  try {
    const response = await Axios.get(`${API_BASE_URL}/character`, {
      params: {
        page,
        name: name || undefined,
        status: status.toLowerCase() || undefined,
        species: species.toLowerCase() || undefined,
        gender: gender.toLowerCase() || undefined,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
}

export async function getCharacterById(
  id: number | string
): Promise<Character | null> {
  try {
    const response = await Axios.get(`${API_BASE_URL}/character/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching character:", error);
    return null;
  }
}

export interface Episode {
  id: number;
  name: string;
  episode: string;
}

export async function getEpisodesByUrls(urls: string[]): Promise<Episode[]> {
  try {
    const episodes = await Promise.all(
      urls.map((url) => Axios.get(url).then((r) => r.data))
    );
    return episodes;
  } catch (error) {
    console.error("Error fetching episodes:", error);
    return [];
  }
}
