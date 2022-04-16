import React from "react";
import "./cards.scss";
import Card from "../card/card";

const Cards = () => {
  return (
    <div className="cards">
      <span className="cards__title">Все пиццы</span>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
