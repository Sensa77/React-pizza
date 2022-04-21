import React from "react";
import BasketFooter from "../basket-footer/basket-footer";
import BasketHeader from "../basket-header/basket-header";
import BasketCards from "../basket-cards/basket-cards";
import "./basket.scss";

const Basket = () => {
  return (
    <div className="basket">
      <BasketHeader />
      <BasketCards />
      <BasketFooter />
    </div>
  );
};

export default Basket;
