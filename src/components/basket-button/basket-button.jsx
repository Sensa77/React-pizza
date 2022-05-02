import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { totalCounterSelector, totalPriceSelector } from "../cards/cards-slice";
import "./basket-button.scss";

const BasketButton = () => {
  const totalCounter = useSelector(totalCounterSelector);
  const totalPrice = useSelector(totalPriceSelector);
  return (
    <Link to="/basket">
      <button type="button" className="button">
        <span className="button__sum">{totalPrice} ₽</span>
        <span className="button__amount">{totalCounter}</span>
      </button>
    </Link>
  );
};

export default BasketButton;
