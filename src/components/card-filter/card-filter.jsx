import React from "react";
import "./card-filter.scss";
import thickness from "../../utils/pizza-size";
import { diameter } from "../../utils/pizza-size";

const CardFilter = ({ id, size, types }) => {
  return (
    <div className="filter-container">
      <form className="filter-thickness">
        {thickness.map(({ label, value, key }) => {
          const isDisabled = !types.includes(key);
          return (
            <div className="filter-thickness__item" key={`${label}-${id}`}>
              <input
                disabled={isDisabled}
                type="radio"
                className="filter-thickness__input visually-hidden"
                name="thickness"
                value={value}
                id={`${value}-${id}`}
              />
              <label
                className="filter-thickness__label"
                htmlFor={`${value}-${id}`}
              >
                {label}
              </label>
            </div>
          );
        })}
      </form>
      <form className="filter-diameter">
        {diameter.map((label) => {
          const isDisabled = !size.includes(label);
          return (
            <div className="filter-diameter__item" key={`${label}-${id}`}>
              <input
                disabled={isDisabled}
                type="radio"
                className="filter-diameter__input visually-hidden"
                name="diameter"
                value={label}
                id={`${label}-${id}`}
              />
              <label
                className="filter-diameter__label"
                htmlFor={`${label}-${id}`}
              >
                {label} см
              </label>
              {/* { прям тут можешь console.log() делать. Сначала получи тут true-false значения. Метод find в помощь.} */}
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default CardFilter;
