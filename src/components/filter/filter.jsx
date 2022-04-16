import React from "react";
import "./filter.scss";

const Filter = () => {
  return (
    <ul className="filter">
      <li>
        <button type="button" className="filter__item">
          Все
        </button>
      </li>
      <li>
        <button type="button" className="filter__item">
          Мясные
        </button>
      </li>
      <li>
        <button type="button" className="filter__item">
          Вегетерианские
        </button>
      </li>
      <li>
        <button type="button" className="filter__item">
          Гриль
        </button>
      </li>
      <li>
        <button type="button" className="filter__item">
          Острые
        </button>
      </li>
      <li>
        <button type="button" className="filter__item">
          Закрытые
        </button>
      </li>
    </ul>
  );
};

export default Filter;
