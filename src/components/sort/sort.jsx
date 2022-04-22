import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortNameSelector, changeSortName } from "../cards/cards-slice";
import "./sort.scss";

const Sort = () => {
  const [selectIsActive, setSelectIsActive] = useState(false);
  const dispatch = useDispatch();
  const sortName = useSelector(sortNameSelector);
  return (
    <div className="sort">
      <span className="sort__title">Сортировка по:</span>
      <div className="sort__wrapper select">
        {selectIsActive ? (
          <>
            <span
              className="select__name"
              onClick={() => {
                setSelectIsActive(false);
              }}
            >
              {sortName}
            </span>
            <form className="select__list">
              <label
                className="select__label"
                onClick={() => {
                  dispatch(changeSortName("популярности"));
                  setSelectIsActive(false);
                }}
              >
                популярности
                <input
                  type="radio"
                  name="item"
                  value="popularity"
                  className="select__input visually-hidden"
                ></input>
              </label>
              <label
                className="select__label"
                onClick={() => {
                  dispatch(changeSortName("цене"));
                  setSelectIsActive(false);
                }}
              >
                цене
                <input
                  type="radio"
                  name="item"
                  value="price"
                  className="select__input visually-hidden"
                ></input>
              </label>
              <label
                className="select__label"
                onClick={() => {
                  dispatch(changeSortName("алфавиту"));
                  setSelectIsActive(false);
                }}
              >
                алфавиту
                <input
                  type="radio"
                  name="item"
                  value="alphabet"
                  className="select__input visually-hidden"
                ></input>
              </label>
            </form>
          </>
        ) : (
          <>
            <span
              className="select__name"
              onClick={() => setSelectIsActive(true)}
            >
              {sortName}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Sort;
