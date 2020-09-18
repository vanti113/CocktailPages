import React from "react";

function Ordinary({ name, image }) {
  return (
    <ul className="ordinary__list">
      <li>
        <span>{name}</span>
      </li>
      <img src={image} alt={name} title={name} />
    </ul>
  );
}

export default Ordinary;
