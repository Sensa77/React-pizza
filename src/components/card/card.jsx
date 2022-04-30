import { DevTool } from "@hookform/devtools";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CardFilter from "../card-filter/card-filter";
import {
  basketSelector,
  addToBasket,
  pizzasSelector,
} from "../cards/cards-slice";
import "./card.scss";

const Card = ({ name, img, price, id, size, types }) => {
  const basket = useSelector(basketSelector);
  const pizzas = useSelector(pizzasSelector);
  const dispatch = useDispatch();
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className="card">
        <img
          className="card__img"
          src={img}
          width="259px"
          height="260px"
          alt="Фото пиццы"
        />
        <span className="card__name">{name}</span>
        <CardFilter id={id} size={size} types={types} />
        <div className="card-footer">
          <span className="card-footer__price">от {price} ₽</span>
          <button
            type="button"
            className="card-footer__button"
            onClick={methods.handleSubmit((value) => {
              dispatch(
                addToBasket({
                  id,
                  count: (basket[id]?.count || 0) + 1,
                  ...value,
                })
              );
            })}
          >
            + Добавить
          </button>
        </div>
      </div>
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default Card;
