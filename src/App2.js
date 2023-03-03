import React from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/offset10${pokemonName}`).then(
        (response) => {
          console.log(response);
        }
    );
  };
  return (
      <div className="flex flex-col justify-center">
        <div className="text-3xl w-full">Pokemon Stats</div>
        <input
            className="h-max w-max rounded-full outline m-4"
            type="text"
            onChange={(event) => {
              setPokemonName(event.target.value);
            }}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={searchPokemon}>Search Pokemon</button>
      </div>
  );
}

export default App;
