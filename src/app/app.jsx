import React from "react";
import "./app.scss";
import Main from "../components/pages/main/main";
import BasketPage from "../components/pages/basket-page/basket-page";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/basket" element={<BasketPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
