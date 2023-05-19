import "./Tag.css";

export const Tag = ({ type }) => {
  return (
    <span
      className={`card__content__types__pills card-background-color--${type}`}
    >
      {type}
    </span>
  );
};
