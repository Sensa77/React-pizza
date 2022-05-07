import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getPizzas } from "../../utils/api";

const initialState = {
  pizzas: [],
  status: "",
  viewPizzas: [],
  category: "все",
  labelCategory: "Все",
  sortName: "популярности",
  basket: {},
  totalCounter: 0,
  totalPrice: 0,
};

export const getPizzasData = createAsyncThunk("getPizzasData", async () => {
  try {
    const pizzas = await axios({
      method: "GET",
      url: getPizzas(),
    }).then((res) => res.data);
    return pizzas;
  } catch (error) {
    console.log(error);
  } finally {
  }
});

export const cardsSlice = createSlice({
  name: "Cards",
  initialState,
  reducers: {
    filteringPizza: (state, action) => {
      state.viewPizzas = action.payload;
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    changeLabelCategory: (state, action) => {
      state.labelCategory = action.payload;
    },
    changeSortName: (state, action) => {
      state.sortName = action.payload;
    },
    sortPizza: (state, action) => {
      state.viewPizzas = action.payload;
    },
    addToBasket: (state, action) => {
      const { id, ...other } = action.payload;
      state.basket = {
        ...state.basket,
        [id]: {
          ...state.basket[id],
          ...other,
        },
      };
    },
    changeTotalCounter: (state, action) => {
      state.totalCounter = action.payload;
    },
    changeTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    deleteBasketElement: (state, action) => {
      const id = action.payload;
      const newObj = { ...state.basket };
      delete newObj[id];
      state.basket = newObj;
    },
  },

  extraReducers: {
    [getPizzasData.pending]: (state) => {
      state.status = "loading";
    },
    [getPizzasData.fulfilled]: (state, action) => {
      state.status = "done";
      state.pizzas = action.payload;
    },
    [getPizzasData.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const pizzasSelector = (state) => state.cards.pizzas;
export const statusSelector = (state) => state.cards.status;
export const categorySelector = (state) => state.cards.category;
export const viewPizzasSelector = (state) => state.cards.viewPizzas;
export const labelCategorySelector = (state) => state.cards.labelCategory;
export const sortNameSelector = (state) => state.cards.sortName;
export const basketSelector = (state) => state.cards.basket;
export const totalCounterSelector = (state) => state.cards.totalCounter;
export const totalPriceSelector = (state) => state.cards.totalPrice;
export const {
  filteringPizza,
  changeCategory,
  changeLabelCategory,
  changeSortName,
  sortPizza,
  addToBasket,
  changeTotalCounter,
  changeTotalPrice,
  deleteBasketElement,
} = cardsSlice.actions;
export default cardsSlice.reducer;
