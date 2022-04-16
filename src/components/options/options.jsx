import React from "react";
import "./options.scss";
import Filter from "../filter/filter";
import Sort from "../sort/sort";

const Options = () => {
  return (
    <div className="options">
      <Filter />
      <Sort />
    </div>
  );
};

export default Options;
