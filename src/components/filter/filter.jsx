import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filteringPizza,
  pizzasSelector,
  changeCategory,
  categorySelector,
} from "../cards/cards-slice";
import filterList from "../../utils/filters";
import "./filter.scss";

const Filter = () => {
  const dispatch = useDispatch();
  const cards = useSelector(pizzasSelector);
  const categoryData = useSelector(categorySelector);

  const filterItem = (category) => {
    if (category === "все") {
      return cards;
    } else {
      return cards.filter((item) => {
        return item.category === category;
      });
    }
  };

  useEffect(() => {
    cards.length && dispatch(filteringPizza(filterItem(categoryData)));
  }, [categoryData, cards]);

  return (
    <ul className="filter">
      {filterList.map(({ label, category }) => {
        return (
          <li>
            <button
              type="button"
              className="filter__item"
              onClick={() => dispatch(changeCategory(category))}
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Filter;
