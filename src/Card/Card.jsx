import "./Card.css";
import iconWeight from "./../assets/icon-weight.svg";
import iconHeight from "./../assets/icon-height.svg";
import { Tag } from "../Tag/Tag";

export const Card = ({ pokemon }) => {
  return (
    <div className={`card card-background-color--${pokemon.types[0]}`}>
      <div className="card__title">
        <h5>{pokemon.name}</h5>
        <h6>#{pokemon.id}</h6>
      </div>
      <div className="card__content">
        <div className="card__image-wrapper">
          <img alt={`Imagen ${pokemon.name}`} src={pokemon.src} />
        </div>
        <div className="card__content__types">
          {pokemon.types.map((type) => {
            return <Tag type={type} />;
          })}
        </div>
        <p className={`card__content__about card-color--${pokemon.types[0]}`}>
          About
        </p>
        <div className="card__content__measures">
          <div>
            <div>
              <img alt="Imagen Weight" src={iconWeight} />
              <span className="card__content__measures__data">
                {pokemon.weight} kg
              </span>
            </div>
            <p className="card__content__measures__data-name">Weight</p>
          </div>
          <hr></hr>
          <div>
            <div>
              <img alt="Imagen Height" src={iconHeight} />
              <span className="card__content__measures__data">
                {pokemon.height} m
              </span>
            </div>
            <p className="card__content__measures__data-name">Height</p>
          </div>
        </div>
        <p class="card__content__description">{pokemon.description}</p>
      </div>
    </div>
  );
};
