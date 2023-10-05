import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "./calc-slice";
import inputSlice from "./calc-slice";

const store = configureStore({
  reducer: { calc: calcSlice.reducer, input: inputSlice.reducer },
});

export default store;
