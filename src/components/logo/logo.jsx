import React from "react";
import "./logo.scss";
import picture from "./logo.png";

const Logo = ({ className = "" }) => {
  return (
    <div className={`logo ${className}`}>
      <img
        className="logo__picture"
        src={picture}
        alt="Логотип пиццы"
        width="38px"
        height="38px"
      ></img>
      <div className="logo-text text">
        <span className="logo-text__title">React pizza</span>
        <p className="logo-text__description">
          самая вкусная пицца во вселенной
        </p>
      </div>
    </div>
  );
};

export default Logo;
