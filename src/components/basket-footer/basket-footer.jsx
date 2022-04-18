import React from "react";
import "./basket-footer.scss";

const BasketFooter = () => {
  return (
    <>
      <div className="detail">
        <span className="detail__amount-pizza">
          Всего пицц:{" "}
          <span className="detail__amount-pizza--width-bold">3 шт.</span>
        </span>
        <div className="detail__order-price">
          Сумма заказа:{" "}
          <span className="detail__order-price--width-bold">900 ₽</span>
        </div>
      </div>
      <div className="basket-button">
        <button type="button" className="basket-button__back">
          <span className="basket-button__back-text">Вернуться назад</span>
        </button>
        <button type="button" className="basket-button__payment">
          Оплатить сейчас
        </button>
      </div>
    </>
  );
};

export default BasketFooter;
