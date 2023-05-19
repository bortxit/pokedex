import "./reset_style.css";
import "./App.css";
import { Card } from "./components/Card/Card";
import { getPokemons } from "./services/PokeApiService";
import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await getPokemons();
      setPokemons(pokemons);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <nav>My Pokedex</nav>
      </header>
      <section>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} />
        ))}
      </section>
    </div>
  );
}

export default App;
