import React from 'react';
import "./Shines.css"

import piguet from "../../public/Audemar Piguet Full look.avif";

const Shines = ({ imageSrc, name, price }) => {
  return (
    <div className="watch-card">
      <div className="img-container">
        <img src={piguet} alt={name} />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <p>{price}</p>
        <button className="add-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default Shines;