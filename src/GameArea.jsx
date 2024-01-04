import { useEffect, useState } from "react";
import GameCard from "./GameCard";

export default function GameArea({ setCurrentScore, setHighScore }) {
  const [allPokemon, setAllPokemon] = useState([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [currentRoundPokemon, setCurrentRoundPokemon] = useState([]);
  const [cardsClicked, setCardsClicked] = useState([]);

  async function getPokemon() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1300&offset=0",
      );
      if (!response.ok) {
        throw new Error("API Request failed");
      }
      const results = await response.json();
      const pokemonList = results.results;
      setAllPokemon(pokemonList);
    } catch (error) {
      console.error("Network error", error);
    }
  }
  useEffect(() => {
    getPokemon();
  }, []);

  async function newCurrentPokemon() {
    if (!allPokemon[0]) return; // Early return if pokemon list is empty
    const numInitialPokemon = 4;
    const plusPokemonPerRound = 2;
    const numTotalPokemon =
      numInitialPokemon + currentRound * plusPokemonPerRound;
    const newCurrentRoundPokemon = [];
    const pokemonPromises = [];

    for (let i = 0; i < numTotalPokemon; i++) {
      const randomIndex = Math.floor(Math.random() * allPokemon.length);
      const newURL = allPokemon[randomIndex].url;
      const newPokemonPromise = fetch(newURL)
        .then((response) => response.json())
        .catch((error) => {
          console.error("Fetching Pokemon failed:", error);
          return null;
        });
      pokemonPromises.push(newPokemonPromise);
    }

    const resolvedPokemon = await Promise.all(pokemonPromises);
    for (const pokemonData of resolvedPokemon) {
      if (pokemonData) {
        const newPokemon = {
          name: pokemonData.species.name,
          key: pokemonData.species.name,
          img:
            pokemonData.sprites.other["official-artwork"].front_default ||
            pokemonData.sprites.front_default,
        };
        newPokemon.name =
          newPokemon.name[0].toUpperCase() + newPokemon.name.slice(1);
        newCurrentRoundPokemon.push(newPokemon);
      }
    }
    return newCurrentRoundPokemon;
  }

  useEffect(() => {
    const newPokemonPromise = newCurrentPokemon();
    newPokemonPromise
      .then((newPokemon) => {
        setCurrentRoundPokemon(newPokemon);
      })
      .catch((error) => console.error(error));
  }, [currentRound, allPokemon]);

  function onCardClick(id) {
    if (cardsClicked.includes(id)) {
      console.log("Game Over");
      // gameOver();
    } else {
      setCardsClicked((prevClicked) => [...prevClicked, id]);
    }
    nextRound();
    console.log(cardsClicked);
    console.log(currentRound);
  }

  function nextRound() {
    if (cardsClicked.length === currentRoundPokemon.length) {
      setCurrentRound((current) => current + 1);
      setCardsClicked([]);
    }
  }

  return (
    <div className="game-container">
      {currentRoundPokemon
        ? currentRoundPokemon.map((pokemon) => (
            <GameCard
              key={pokemon.key}
              id={pokemon.key}
              name={pokemon.name}
              img={pokemon.img}
              onClick={onCardClick}
            />
          ))
        : "Loading..."}
    </div>
  );
}
