import { useEffect, useState } from "react";
import GameCard from "./GameCard";

export default function GameArea({
  setCurrentScore,
  setHighScore,
}) {
  const [ allPokemon, setAllPokemon ] = useState([]);
  const [ currentRound, setCurrentRound] = useState(0);
  const [ currentRoundPokemon, setCurrentRoundPokemon] = useState([]);
  
  async function getPokemon() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1300&offset=0",
      );
      if (!response.ok) {
        throw new Error('API Request failed');
      }
      const results = await response.json();
      const pokemonList = results.results;
      setAllPokemon(pokemonList);

    } catch (error) {
      console.error("Network error", error);
    }
  }

  function newCurrentPokemon() {
    const numInitialPokemonForGame = 4;
    const plusPokemonPerRound = 2;
    const numTotalPokemon = numInitialPokemonForGame + (currentRound * plusPokemonPerRound);
    const addPokemonToCurrentRound = [];
    
    for ( let i = 0; i < numTotalPokemon; i++) {
      const randomIndex = Math.floor(Math.random() * allPokemon.length);
      const newPokemon = allPokemon[randomIndex];
      addPokemonToCurrentRound.push(newPokemon);
    }
    return addPokemonToCurrentRound
  }

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    setCurrentRoundPokemon(newCurrentPokemon());
  }, [currentRound, allPokemon])
  
  console.log(currentRoundPokemon)


  return (
    <div className="game-container">
      {<GameCard />}
    </div>
  );
}
