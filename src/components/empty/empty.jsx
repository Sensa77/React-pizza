import React from "react";
import "./empty.scss";
import empty from "./empty.png";

const Empty = () => {
  return (
    <div className="empty">
      <span className="empty__title">Корзина пустая</span>
      <p className="empty__description">
        Вероятней всего, вы не заказывали еще пиццу. Для того, чтобы заказать
        пиццу, перейтите на главную страницу.
      </p>
      <img
        className="empty__img"
        src={empty}
        alt="Картинка пустой корзины"
        width="299px"
        heigth="255px"
      />
      <button type="button" className="empty__back">
        Вернуться назад
      </button>
    </div>
  );
};

export default Empty;
