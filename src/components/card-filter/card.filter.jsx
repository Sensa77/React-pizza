import React from "react";
import "./card-filter.scss";

const CardFilter = () => {
  const disabled = true;
  return (
    <div className="filter-container">
      <form className="filter-thickness">
        <input
          type="radio"
          className="filter-thickness__input visually-hidden"
          name="thickness"
          value="thin"
          id="thin"
        />
        <label className="filter-thickness__label" htmlFor="thin">
          тонкое
        </label>
        <input
          type="radio"
          className="filter-thickness__input visually-hidden"
          value="traditional"
          name="thickness"
          id="traditional"
        />
        <label className="filter-thickness__label" htmlFor="traditional">
          традиционное
        </label>
      </form>
      <form className="filter-diameter">
        <input
          type="radio"
          className="filter-diameter__input visually-hidden"
          name="diameter"
          value="26"
          id="26"
          disabled={disabled}
        />
        <label
          className="filter-diameter__label filter-diameter__label--isDisabled"
          htmlFor="26"
        >
          26 см
        </label>
        <input
          type="radio"
          className="filter-diameter__input visually-hidden"
          name="diameter"
          value="30"
          id="30"
        />
        <label className="filter-diameter__label" htmlFor="30">
          30 см
        </label>
        <input
          type="radio"
          className="filter-diameter__input visually-hidden"
          name="diameter"
          value="40"
          id="40"
        />
        <label className="filter-diameter__label" htmlFor="40">
          40 см
        </label>
      </form>
    </div>
  );
};

export default CardFilter;
