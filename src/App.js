import logo from "./logo.svg";
import "./reset_style.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>My Pokedex</nav>
      </header>
      <section>
        <div class="card-container">
          <div class="card-title"></div>
          <img class="image" src="" />
          <div class="card-content"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
