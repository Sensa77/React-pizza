import React from "react";
import "./empty-basket.scss";
import empty from "./empty-basket.png";
import { Link } from "react-router-dom";

const EmptyBasket = () => {
  return (
    <div className="empty">
      <span className="empty__title">Корзина пустая 😕</span>
      <p className="empty__description">
        Вероятней всего, вы не заказывали еще пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейтите на главную страницу.
      </p>
      <img
        className="empty__img"
        src={empty}
        alt="Картинка пустой корзины"
        width="299px"
        heigth="255px"
      />
      <Link to="/">
        <button type="button" className="empty__back">
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default EmptyBasket;
