import React from "react";
import "./basket-card.scss";
import thicknessUtils from "../../utils/pizza-size";
import { useSelector } from "react-redux";
import { basketSelector, pizzasSelector } from "../cards/cards-slice";

const BasketCard = ({ id, count, diameter, thickness }) => {
  const pizzas = useSelector(pizzasSelector);
  const basket = useSelector(basketSelector);
  const basketEntries = Object.entries(basket);

  const thicknessName = thicknessUtils.find((item) => {
    if (item.key === thickness) {
      return true;
    }
    return false;
  });

  const pizzaCard = pizzas.find((pizza) => {
    if (pizza.id === +id) {
      return pizza;
    }
  });

  return (
    <div className="basket-card">
      <div className="basket-card__product product">
        <img
          className="product__img"
          alt="Фото пиццы"
          src={pizzaCard.imageUrl}
          width="80px"
          height="80px"
        />
        <div className="product__text text">
          <span className="text__title">{pizzaCard.name}</span>
          <p className="text__decription">
            {thicknessName.label} тесто, {diameter} см
          </p>
        </div>
      </div>
      <div className="basket-card__characteristics characteristics">
        <div className="characteristics__amount amount">
          <button type="button" className="amount__button">
            −
          </button>
          <span className="amount__number">{count}</span>
          <button type="button" className="amount__button">
            +
          </button>
        </div>
        <div className="characteristics__price price">
          <span className="price__text">{pizzaCard.price} ₽</span>
        </div>
        <button type="button" className="characteristics__delete delete">
          <svg
            width="11"
            height="9"
            viewBox="0 0 10 9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.74791 6.95572L6.49931 4.70712L8.74791 2.45852C9.16184 2.04459 9.16184 1.37339 8.74791 0.959458C8.33398 0.545528 7.66277 0.545528 7.24884 0.959458L5.00024 3.20806L2.75164 0.959458C2.33771 0.545528 1.66651 0.545528 1.25258 0.959458C0.838648 1.37339 0.838648 2.04459 1.25258 2.45852L3.50118 4.70712L1.25258 6.95572C0.838649 7.36965 0.838649 8.04086 1.25258 8.45479C1.66651 8.86872 2.33772 8.86872 2.75164 8.45479L5.00024 6.20619L7.24884 8.45479C7.66277 8.86872 8.33398 8.86872 8.74791 8.45479C9.16184 8.04086 9.16184 7.36965 8.74791 6.95572Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
