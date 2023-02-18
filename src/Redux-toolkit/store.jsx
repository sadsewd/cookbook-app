import { configureStore } from "@reduxjs/toolkit";
import dataStateReducer from "./Recipes";

export default configureStore({
  reducer: {
    dataState: dataStateReducer,
  },
});
