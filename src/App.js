import "./reset_style.css";
import "./App.css";
import { Card } from "./Card/Card";

function App() {
  const pokemons = [
    {
      id: "001",
      name: "Bulbasur",
      height: 4.3,
      weight: 6.5,
      types: ["grass", "poison"],
      src: "./../assets/bulbasur.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi. Integer eget urna eu mauris scelerisque ornare. Nam at finibus purus.",
    },
    {
      id: "004",
      name: "Charmander",
      height: 0.6,
      weight: 8.5,
      types: ["fire"],
      src: "./../assets/charmander.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi. Integer eget urna eu mauris scelerisque ornare. Nam at finibus purus.",
    },
  ];

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
