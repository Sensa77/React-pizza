import React from "react";
import "./filter.scss";

const Filter = () => {
  return (
    <ul className="filter">
      <li className="filter__item">Все</li>
      <li className="filter__item">Мясные</li>
      <li className="filter__item">Вегетерианские</li>
      <li className="filter__item">Гриль</li>
      <li className="filter__item">Острые</li>
      <li className="filter__item">Закрытые</li>
    </ul>
  );
};

export default Filter;
