import "./Card.css";
import iconWeight from "./assets/icon-weight.svg";
import iconHeight from "./assets/icon-height.svg";

function Card() {
  return (
    <div className="card">
      <div className="card__title">
        <h5>Bulbasur</h5>
        <h6>#001</h6>
      </div>
      <div className="card__content">
        <div className="card__image-wrapper">
          <img alt="Imagen Bulbasur" src="" />
        </div>
        <div className="card__content__types">
          <span className="card__content__types__pills card__content__types__pill--grass">
            Grass
          </span>
          <span className="card__content__types__pills card__content__types__pill--poison">
            Poison
          </span>
        </div>
        <p className="card__content__about">About</p>
        <div className="card__content__measures">
          <div>
            <div>
              <img alt="Imagen Weight" src={iconWeight} />
              <span className="card__content__measures__data">6,9 kg</span>
            </div>
            <p className="card__content__measures__data-name">Weight</p>
          </div>
          <hr></hr>
          <div>
            <div>
              <img alt="Imagen Height" src={iconHeight} />
              <span className="card__content__measures__data">0,7 m</span>
            </div>
            <p className="card__content__measures__data-name">Height</p>
          </div>
        </div>
        <p class="card__content__description">
          There is a plant seed on its back right from the day this Pokemon is
          born.
        </p>
      </div>
    </div>
  );
}
