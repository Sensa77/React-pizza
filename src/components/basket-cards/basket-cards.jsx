import React from "react";
import "./basket-cards.scss";
import BasketCard from "../basket-card/basket-card";

const BasketCards = () => {
  return (
    <div className="basket-cards">
      <BasketCard />
      <BasketCard />
      <BasketCard />
    </div>
  );
};

export default BasketCards;
