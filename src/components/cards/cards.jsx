import React from "react";
import "./cards.scss";
import Card from "../card/card";

const Cards = () => {
  return (
    <div className="cards">
      <span className="cards__title">Все пиццы</span>
      <div className="cards__list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cards;
