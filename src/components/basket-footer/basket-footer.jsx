import React from "react";
import "./basket-footer";

const BasketFooter = () => {
  return (
    <>
      <div className="detail">
        <span className="detail__amount-pizza">Всего пицц: 3 шт.</span>
        <div className="detail__order-price">
          Сумма заказа:<span className="detail__sum">900 Р</span>
        </div>
      </div>
      <div className="button">
        <button type="button" className="button__back">
          <span className="button__back-text">Вернуться назад</span>
        </button>
        <button type="button" className="button__payment">
          Оплатить сейчас
        </button>
      </div>
    </>
  );
};

export default BasketFooter;
