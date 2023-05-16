import "./reset_style.css";
import "./App.css";
import { Card } from "./Card/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>My Pokedex</nav>
      </header>
      <section>
        <Card />
      </section>
    </div>
  );
}

export default App;
