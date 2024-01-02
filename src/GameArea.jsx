import { useEffect } from "react";
import GameCard from "./GameCard";

export default function GameArea({
  setCurrentScore,
  setHighScore,
}) {
  async function logPokemon() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1300&offset=0",
      );
      if (!response.ok) {
        throw new Error('API Request failed');
      }
      console.log(response);
      const results = await response.json();
      return results;
    } catch (error) {
      console.error("Network error", error);
    }
  }

  useEffect(() => {
    logPokemon();
  }, []);

  return (
    <div className="game-container">
      <GameCard />
    </div>
  );
}
