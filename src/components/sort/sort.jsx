import React from "react";
import "./sort.scss";

const Sort = () => {
  return (
    <div className="sort">
      <span className="sort__title">Сортировка по:</span>
      <select className="sort__list">
        <option className="sort__item">популярности</option>
        <option className="sort__item">цене</option>
        <option className="sort__item">алфавиту</option>
      </select>
    </div>
  );
};

export default Sort;
