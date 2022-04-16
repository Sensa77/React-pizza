import React from "react";
import "./basket-button.scss";

const BasketButton = () => {
  return (
    <>
      <button type="button" className="button">
        <span className="button__sum">520 Р</span>
        <span className="button__amount">3</span>
      </button>
    </>
  );
};

export default BasketButton;
