import React from "react";
import "./empty-card.scss";
import pizza from "./pizza.png";

const EmptyCard = () => {
  return (
    <div className="empty-card">
      <span className="empty-card__title">
        Пусто. Возможно скоро здесь что-нибудь появится😉
      </span>
      <img
        className="empty-card__img"
        alt="нет пицц"
        src={pizza}
        width="300px"
        height="300px"
      />
    </div>
  );
};

export default EmptyCard;
