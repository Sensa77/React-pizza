import React from "react";
import CardFilter from "../card-filter/card.filter";
import "./card.scss";
import pizza from "./pizza.png";

const Card = () => {
  return (
    <div className="card">
      <img
        className="card__img"
        src={pizza}
        width="259px"
        height="260px"
        alt="Фото пиццы"
      />
      <span className="card__name">Сырная</span>
      <CardFilter />
      <div className="card-footer">
        <span className="card-footer__price">от 395 ₽</span>
        <button type="button" className="card-footer__button">
          + Добавить
        </button>
      </div>
    </div>
  );
};

export default Card;
