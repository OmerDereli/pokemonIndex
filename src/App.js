import "./App.css";
import Header from "./Components/Header/Header";
import SearchPokemon from "./Components/SearchBar/SearchPokemon";
import PokeIndex from "./Components/PokeIndex/PokeIndex";
import PokeCards from "./Components/PokeCards/PokeCards";
import BasicSelect from "./Components/Select/Select";
import backpoke from "./assets/pokeballbackground.svg";
import PokemonList from "./Components/PokemonList/PokemonList";

function App() {
  return (
    <div className="App">
        <img
            src={backpoke}
            alt="backpoke"
            style={{
                position: "absolute",
                zIndex: -1,
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
            }}
        />
      <Header />
      <div style={{ display: "flex", width: "80%" }}>
        <div style={{ width: "65%", marginRight: 16 }}>
          <SearchPokemon />
          <BasicSelect />
          {/*<PokeCards />*/}
          <PokemonList />
        </div>
        <div style={{ width: "35%", marginLeft: 16 }}>
          <PokeIndex />
        </div>
      </div>
    </div>
  );
}

export default App;
