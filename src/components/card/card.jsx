import React from "react";
import "./card.scss";

const Card = () => {
  return (
    <div className="card">
      <img className="card__img" />
      <span className="card__name">Сырная</span>
      <div className="filter-container">
        <form className="fiter-thickness">
          <label className="fiter-thickness__label">
            <input
              type="radio"
              className="fiter-thickness__input"
              name="thickness"
              value="thin"
            />
            Тонкое
          </label>
          <label className="fiter-thickness__label">
            <input
              type="radio"
              className="fiter-thickness__input"
              value="traditional"
              name="thickness"
            />
            Традиционное
          </label>
        </form>
        <form className="fiter-diameter">
          <label className="fiter-diameter__label">
            <input
              type="radio"
              className="fiter-diameter__input"
              name="diameter"
              value="26"
            />
            26 см
          </label>
          <label className="fiter-diameter__label">
            <input
              type="radio"
              className="fiter-diameter__input"
              name="diameter"
              value="30"
            />
            30 см
          </label>
          <label className="fiter-diameter__label">
            <input
              type="radio"
              className="fiter-diameter__input"
              name="diameter"
              value="40"
            />
            40 см см
          </label>
        </form>
      </div>
      <div className="card-footer">
        <span className="card-footer__price">от 395Р</span>
        <button type="button" className="card-footer__button">
          <span className="card-footer__button-text">+ Добавить</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
