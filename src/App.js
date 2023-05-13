import logo from "./logo.svg";
import "./reset_style.css";
import "./App.css";
import bulbasur from "./assets/bulbasur.svg";
import iconWeight from "./assets/icon-weight.svg";
import iconHeight from "./assets/icon-height.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>My Pokedex</nav>
      </header>
      <section>
        <div className="card-container">
          <div className="card-title">
            <h5>Bulbasur</h5>
            <h6>#001</h6>
          </div>
          <img className="card-image" alt="Imagen Bulbasur" src={bulbasur} />
          <div className="card-content">
            <div className="pokemon-type pokemon-type-font">
              <span className="pokemon-type-grass">Grass</span>
              <span className="pokemon-type-poison">Poison</span>
            </div>
            <p>About</p>
            <div className="pokemon-measures">
              <div className="pokemon-weight">
                <div className="pokemon-weight-description">
                  <img
                    className="card-icon-measures"
                    alt="Imagen Weight"
                    src={iconWeight}
                  />
                  <span>6,9 kg</span>
                </div>
                <span>Weight</span>
              </div>
              <hr></hr>
              <div className="pokemon-height">
                <div className="pokemon-height-description">
                  <img
                    className="card-icon-measures"
                    alt="Imagen Height"
                    src={iconHeight}
                  />
                  <span>0,7 m</span>
                </div>
                <span>Height</span>
              </div>
            </div>
            <p>
              There is a plant seed on its back right from the day this Pokemon
              is born.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
