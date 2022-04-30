import React from "react";
import "./card-filter.scss";
import thickness from "../../utils/pizza-size";
import { diameter } from "../../utils/pizza-size";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, basketSelector } from "../cards/cards-slice";
import { useFormContext } from "react-hook-form";

const CardFilter = ({ id, size, types }) => {
  const basket = useSelector(basketSelector);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="filter-container">
        <form className="filter-thickness">
          {thickness.map(({ label, value, key }) => {
            const isDisabled = !types.includes(key);
            return (
              <div className="filter-thickness__item" key={`${label}-${id}`}>
                <input
                  {...register("thickness", { required: true })}
                  disabled={isDisabled}
                  type="radio"
                  className="filter-thickness__input visually-hidden"
                  value={key}
                  id={`${value}-${id}`}
                />
                <label
                  className={`filter-thickness__label ${
                    errors?.thickness && "filter-thickness__label--error"
                  }`}
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
                  {...register("diameter", {
                    required: true,
                  })}
                  disabled={isDisabled}
                  type="radio"
                  className="filter-diameter__input visually-hidden"
                  value={label}
                  id={`${label}-${id}`}
                />
                <label
                  className={`filter-diameter__label ${
                    errors?.diameter && "filter-diameter__label--error"
                  }`}
                  htmlFor={`${label}-${id}`}
                >
                  {label} см
                </label>
              </div>
            );
          })}
        </form>
      </div>
      <div
        className={
          (errors?.thickness && `filter-error`) ||
          (errors?.diameter && `filter-error`) ||
          "visually-hidden"
        }
      >
        Вы забыли выбрать характеристики
      </div>
    </>
  );
};

export default CardFilter;
