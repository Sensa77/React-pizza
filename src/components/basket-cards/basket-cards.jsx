import React from "react";
import "./basket-cards.scss";
import BasketCard from "../basket-card/basket-card";
import { useSelector } from "react-redux";
import { basketSelector } from "../cards/cards-slice";
import EmptyBasket from "../empty-basket/empty-basket";

const BasketCards = () => {
  const basket = useSelector(basketSelector);
  const basketArr = Object.entries(basket);
  return (
    <div className="basket-cards">
      {basket.length === 0 ? (
        <EmptyBasket />
      ) : (
        basketArr.map((pizza) => {
          return (
            <BasketCard
              id={pizza[0]}
              key={pizza[0]}
              count={pizza[1].count}
              diameter={pizza[1].diameter}
              thickness={+pizza[1].thickness}
            />
          );
        })
      )}
    </div>
  );
};

export default BasketCards;
