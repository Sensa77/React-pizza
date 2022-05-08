import React from "react";
import { useDispatch } from "react-redux";
import {
  changeTotalCounter,
  changeTotalPrice,
  cleanBasket,
} from "../cards/cards-slice";
import "./basket-header.scss";

const BasketHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="basket-header">
      <span className="basket-header__title">Корзина</span>
      <span
        className="basket-header__delete"
        onClick={() => {
          dispatch(cleanBasket({}));
          dispatch(changeTotalCounter(0));
          dispatch(changeTotalPrice(0));
        }}
      >
        Очистить корзину
      </span>
    </div>
  );
};

export default BasketHeader;
