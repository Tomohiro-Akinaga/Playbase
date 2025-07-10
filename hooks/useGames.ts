import { useState, useEffect } from "react";
import { fetchGames } from "@/services/api";

export function useGames() {
  const [games, setGames] = useState<Game[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchGames();
        setGames(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return { games };
}
