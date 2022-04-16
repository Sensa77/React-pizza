import React from "react";
import "./sort.scss";

const Sort = () => {
  return (
    <div className="sort">
      <span className="sort__title">Сортировка по:</span>
      <div className="sort__wrapper select">
        <span className="select__name">популярности</span>
        <form className="select__list">
          <label className="select__label">
            популярности
            <input
              type="radio"
              name="item"
              value="popularity"
              className="select__input visually-hidden"
            ></input>
          </label>
          <label className="select__label">
            цене
            <input
              type="radio"
              name="item"
              value="price"
              className="select__input visually-hidden"
            ></input>
          </label>
          <label className="select__label">
            алфавиту
            <input
              type="radio"
              name="item"
              value="alphabet"
              className="select__input visually-hidden"
            ></input>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Sort;
