import React from "react";
import "./basket-header.scss";

const BasketHeader = () => {
  return (
    <div className="basket-header">
      <span className="basket-header__title">Корзина</span>
      <span className="basket-header__delete">Очистить корзину</span>
    </div>
  );
};

export default BasketHeader;
