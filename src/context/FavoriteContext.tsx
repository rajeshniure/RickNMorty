import { createContext, useContext, useEffect, useState } from "react";
import { type Character } from "../types/character";

interface FavoriteContextType {
  favorite: Character[];
  toggleFavorite: (character: Character) => void;
  isFavorite: (id: number) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | null>(null);

export function FavoriteProvider({ children }: { children: React.ReactNode }) {
  const [favorite, setFavorite] = useState<Character[]>(() => {
    return JSON.parse(localStorage.getItem("favorite") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  function toggleFavorite(character: Character) {
    setFavorite((prev) =>
      prev.some((c) => c.id === character.id)
        ? prev.filter((c) => c.id !== character.id)
        : [...prev, character]
    );
  }

  function isFavorite(id: number) {
    return favorite.some((c) => c.id === id);
  }

  return (
    <FavoriteContext.Provider value={{ favorite, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite must be used within FavoriteProvider");
  }
  return context;
}
