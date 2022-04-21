import React from "react";
import CardFilter from "../card-filter/card.filter";
import "./card.scss";
import pizza from "./pizza.png";

const Card = ({ name, img, price, size }) => {
  return (
    <div className="card">
      <img
        className="card__img"
        src={img}
        width="259px"
        height="260px"
        alt="Фото пиццы"
      />
      <span className="card__name">{name}</span>
      <CardFilter />
      <div className="card-footer">
        <span className="card-footer__price">от {price} ₽</span>
        <button type="button" className="card-footer__button">
          + Добавить
        </button>
      </div>
    </div>
  );
};

export default Card;
