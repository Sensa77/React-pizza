import React from "react";
import "./basket-page.scss";
import Basket from "../../basket/basket";
import Logo from "../../logo/logo";

const BasketPage = () => {
  return (
    <>
      <Logo className="basket-logo" />
      <Basket />
    </>
  );
};

export default BasketPage;
