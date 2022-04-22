import React, { useEffect } from "react";
import "./cards.scss";
import Card from "../card/card";
import { useDispatch, useSelector } from "react-redux";
import {
  viewPizzasSelector,
  statusSelector,
  labelCategorySelector,
} from "./cards-slice";
import { getPizzasData } from "./cards-slice";
import EmptyCard from "../empty-card/empty-card";

const Cards = () => {
  const filteringData = useSelector(viewPizzasSelector);
  const labelCategory = useSelector(labelCategorySelector);
  const status = useSelector(statusSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzasData());
  }, [dispatch]);

  return (
    <div className="cards">
      <span className="cards__title">{`${labelCategory} пиццы`} </span>
      <div className="cards__list">
        {status === "done" && !filteringData.length && <EmptyCard />}
        {status === "done" &&
          filteringData.map((pizza) => {
            return (
              <Card
                key={pizza.id}
                id={pizza.id}
                name={pizza.name}
                img={pizza.imageUrl}
                price={pizza.price}
                types={pizza.types}
                size={pizza.sizes}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Cards;
