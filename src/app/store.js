import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../components/cards/cards-slice";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
