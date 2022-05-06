import React from "react";
import "./basket-footer.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { totalCounterSelector, totalPriceSelector } from "../cards/cards-slice";

const BasketFooter = () => {
  const totalCounter = useSelector(totalCounterSelector);
  const totalPrice = useSelector(totalPriceSelector);
  return (
    <>
      <div className="detail">
        <span className="detail__amount-pizza">
          Всего пицц:{" "}
          <span className="detail__amount-pizza--width-bold">
            {totalCounter} шт.
          </span>
        </span>
        <div className="detail__order-price">
          Сумма заказа:{" "}
          <span className="detail__order-price--width-bold">
            {totalPrice} ₽
          </span>
        </div>
      </div>
      <div className="basket-button">
        <Link to="/">
          <button type="button" className="basket-button__back">
            <span className="basket-button__back-text">Вернуться назад</span>
          </button>
        </Link>
        <button type="button" className="basket-button__payment">
          Оплатить сейчас
        </button>
      </div>
    </>
  );
};

export default BasketFooter;
