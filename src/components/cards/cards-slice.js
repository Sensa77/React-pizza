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
export const {
  filteringPizza,
  changeCategory,
  changeLabelCategory,
  changeSortName,
  sortPizza,
} = cardsSlice.actions;
export default cardsSlice.reducer;
