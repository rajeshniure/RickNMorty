// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://rickandmortyapi.com/api",
//   timeout: 10000,
// });

// export interface CharactersResponse {
//   info: {
//     count: number;
//     pages: number;
//     next: string | null;
//     prev: string | null;
//   };
//   results: Character[];
// }

// import { type Character } from "../types/character";

// export async function fetchCharacters(page = 1): Promise<CharactersResponse> {
//   const response = await api.get<CharactersResponse>(
//     `/character?page=${page}`
//   );
//   return response.data;
// }
