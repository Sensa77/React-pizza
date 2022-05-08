import React from "react";
import BasketFooter from "../basket-footer/basket-footer";
import BasketHeader from "../basket-header/basket-header";
import BasketCards from "../basket-cards/basket-cards";
import "./basket.scss";
import { useSelector } from "react-redux";
import { basketSelector } from "../cards/cards-slice";
import EmptyBasket from "../empty-basket/empty-basket";

const Basket = () => {
  const basket = useSelector(basketSelector);
  return (
    <div className="basket">
      {Object.keys(basket).length !== 0 ? (
        <>
          <BasketHeader />
          <BasketCards />
          <BasketFooter />
        </>
      ) : (
        <EmptyBasket />
      )}
    </div>
  );
};

export default Basket;
