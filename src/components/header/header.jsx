import React from "react";
import "./header.scss";
import Logo from "../logo/logo";
import BasketButton from "../basket-button/basket-button";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <BasketButton />
    </div>
  );
};
export default Header;
