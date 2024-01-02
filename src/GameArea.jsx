import { useEffect } from "react";
import GameCard from "./GameCard"

export default function GameArea({currentScore, setCurrentScore, setHighScore}) {
  async function logPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1300&offset=0');
    const results = await response.json();
    return results.results;
  }

  useEffect(() => {
    logPokemon();
    console.log('Mounted');
  }, []);

  return (  
  <div className="game-container">
    <GameCard />
  </div>
)
}