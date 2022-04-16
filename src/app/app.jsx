import React from "react";
import "./app.scss";
import Main from "../components/pages/main/main";
import BasketPage from "../components/pages/basket-page/basket-page";

const App = () => {
  return (
    <div className="app">
      {/* <Main /> */}
      <BasketPage />
    </div>
  );
};

export default App;
