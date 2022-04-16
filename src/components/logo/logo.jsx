import React from "react";
import "./logo.scss";
import picture from "./logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img
        className="logo__picture"
        src={picture}
        alt="Логотип пиццы"
        width="38px"
        height="38px"
      ></img>
      <span className="logo__title">React pizza</span>
      <p className="logo__text">самая вкусная пицца во вселенной</p>
    </div>
  );
};

export default Logo;
