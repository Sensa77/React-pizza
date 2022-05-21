import React from "react";
import "./error.scss";
import picture from "./error-pizza.png";
const Error = () => {
  return (
    <div className="error">
      <img
        className="error__picture"
        src={picture}
        alt="ошибка"
        width="300px"
        height="340px"
      />
      <span className="error__title">Упс!</span>
      <p className="error__description">
        Кажется у нас что-то сломалось. Приносим свои извинения!
      </p>
    </div>
  );
};
export default Error;
