import React from "react";
import "./app.scss";
import Main from "../components/pages/main/main";
import BasketPage from "../components/pages/basket-page/basket-page";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "../components/error-boundary/error-boundary";

const App = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/basket" element={<BasketPage />}></Route>
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
};

export default App;
