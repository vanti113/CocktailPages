import React from "react";

function Cocktail({ name, image }) {
  return (
    <ul className="cocktail__list">
      <li>
        <span>{name}</span>
      </li>
      <img src={image} alt={name} title={name} />
    </ul>
  );
}

export default Cocktail;
