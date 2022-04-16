import React from "react";
import BasketCard from "../basket-card/basket-card";
import BasketFooter from "../basket-footer/basket-footer";
import BasketHeader from "../basket-header/basket-header";
import Empty from "../empty/empty";
import "./basket.scss";

const Basket = () => {
  return (
    <div className="basket">
      <BasketHeader />
      <BasketCard />
      <BasketFooter />
    </div>
  );
};

export default Basket;
