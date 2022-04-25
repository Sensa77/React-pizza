import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sortNameSelector,
  changeSortName,
  viewPizzasSelector,
  sortPizza,
} from "../cards/cards-slice";
import "./sort.scss";

const Sort = () => {
  // ref чтобы получить ссылку на html-элемент
  const ref = useRef(null);
  // ref = { current: null }

  const [selectIsActive, setSelectIsActive] = useState(false);
  const dispatch = useDispatch();
  const sortName = useSelector(sortNameSelector);
  const viewPizzas = useSelector(viewPizzasSelector);

  const handleClick = (event) => {
    // проверяю наличие event.target в элементе, который находится в ref. Если event.target не внутри ref.current - закрываю окошко
    if (!ref.current?.contains(event.target)) {
      setSelectIsActive(false);
    }
    // удаляю слушатель события при размонтировании
  };
  // useEffect с возвратом чтобы повесить событие на весь документ один раз и при размонтировании убрать событие, чтобы не грузить память
  //
  useEffect(() => {
    // клик на всю страницу
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    // не передаю зависимости, чтобы повесить один обработчик на страницу.
  }, []);

  return (
    // ref = { current: link to <div sort></div>}
    <div className="sort" ref={ref}>
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
              <input
                type="radio"
                name="item"
                value="popularity"
                id="popularity"
                className="select__input visually-hidden"
              ></input>
              <label
                className="select__label"
                htmlFor="popularity"
                onClick={() => {
                  dispatch(changeSortName("популярности"));
                  setSelectIsActive(false);
                }}
              >
                популярности
              </label>
              <input
                type="radio"
                name="item"
                value="price"
                id="price"
                className="select__input visually-hidden"
              ></input>
              <label
                className="select__label"
                htmlFor="price"
                onClick={() => {
                  dispatch(changeSortName("цене"));
                  setSelectIsActive(false);
                }}
              >
                цене
              </label>
              <input
                type="radio"
                name="item"
                value="alphabet"
                id="alphabet"
                className="select__input visually-hidden"
              ></input>
              <label
                className="select__label"
                htmlFor="alphabet"
                onClick={() => {
                  dispatch(changeSortName("алфавиту"));
                  setSelectIsActive(false);
                }}
              >
                алфавиту
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
