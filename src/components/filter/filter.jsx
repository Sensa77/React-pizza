import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filteringPizza,
  pizzasSelector,
  changeCategory,
  categorySelector,
  changeLabelCategory,
  sortNameSelector,
  viewPizzasSelector,
} from "../cards/cards-slice";
import filterList from "../../utils/filters";
import "./filter.scss";
import {
  sortedByAlphabet,
  sortedByPopularity,
  sortedByPrice,
} from "../../utils/sort";

const Filter = () => {
  const dispatch = useDispatch();
  const cards = useSelector(pizzasSelector);
  const categoryData = useSelector(categorySelector);
  const sortName = useSelector(sortNameSelector);
  const viewPizzas = useSelector(viewPizzasSelector);

  const filterItem = (category) => {
    if (category === "все") {
      return cards;
    } else {
      return cards.filter((item) => {
        return item.category === category;
      });
    }
  };

  const sortItem = (viewPizzas) => {
    switch (sortName) {
      case "популярности":
        return sortedByPopularity(viewPizzas);
      case "цене":
        return sortedByPrice(viewPizzas);
      case "алфавиту":
        return sortedByAlphabet(viewPizzas);
      default:
        return viewPizzas;
    }
  };

  useEffect(() => {
    const filteredItems = filterItem(categoryData);
    const sortedItems = sortItem(filteredItems);
    cards.length && dispatch(filteringPizza(sortedItems));
  }, [categoryData, cards]);

  useEffect(() => {
    const sortedItems = sortItem(viewPizzas);
    cards.length && dispatch(filteringPizza(sortedItems));
  }, [sortName]);

  const selectActive = (category) => {
    if (category === categoryData) {
      return "filter__item--isActive";
    } else {
      return "";
    }
  };

  return (
    <ul className="filter">
      {filterList.map(({ label, category }) => {
        return (
          <li>
            <button
              type="button"
              className={`filter__item ${selectActive(category)}`}
              onClick={() => {
                dispatch(changeCategory(category));
                dispatch(changeLabelCategory(label));
              }}
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
