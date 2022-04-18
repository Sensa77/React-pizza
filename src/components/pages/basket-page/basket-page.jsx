import React from "react";
import "./basket-page.scss";
import Basket from "../../basket/basket";
import Logo from "../../logo/logo";
import Empty from "../../empty/empty";

const BasketPage = () => {
  return (
    <>
      <Logo className="basket-logo" />
      <Basket />
      {/* <Empty /> */}
    </>
  );
};

export default BasketPage;
