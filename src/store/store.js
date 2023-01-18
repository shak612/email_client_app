import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./features/emailSlice";

const store = configureStore({
  reducer: reducer,
});

export default store;
