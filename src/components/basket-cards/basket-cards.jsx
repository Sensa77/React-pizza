import React from "react";
import "./basket-cards.scss";
import BasketCard from "../basket-card/basket-card";
import { useSelector } from "react-redux";
import { basketSelector } from "../cards/cards-slice";

const BasketCards = () => {
  const basket = useSelector(basketSelector);
  console.log(basket.length);
  const basketArr = Object.entries(basket);
  return (
    <div className="basket-cards">
      {basketArr.map((pizza) => {
        return (
          <BasketCard
            id={pizza[0]}
            key={pizza[0]}
            count={pizza[1].count}
            diameter={pizza[1].diameter}
            thickness={+pizza[1].thickness}
          />
        );
      })}
    </div>
  );
};

export default BasketCards;
