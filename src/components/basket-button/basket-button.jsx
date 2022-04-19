import React from "react";
import { Link } from "react-router-dom";
import "./basket-button.scss";

const BasketButton = () => {
  return (
    <Link to="/basket">
      <button type="button" className="button">
        <span className="button__sum">520 ₽</span>
        <span className="button__amount">3</span>
      </button>
    </Link>
  );
};

export default BasketButton;
