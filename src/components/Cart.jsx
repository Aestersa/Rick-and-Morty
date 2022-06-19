import React from "react";
import "../App.css";

const Cart = ({ image, name, status, id }) => {
  return (
    <a className="link" href={`/${id}`}>
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="robots" src={image} />
        <div>
          <h2>{name}</h2>
          <p>{status}</p>
        </div>
      </div>
    </a>
  );
};

export default Cart;
