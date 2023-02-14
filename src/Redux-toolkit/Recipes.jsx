import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "dataState",
  initialState: {
    data: {},
    searchInput: "",
  },
  reducers: {
    UPDATE_DATA: (state, action) => {
      state.data = action.payload;
    },
    UPDATE_INPUT: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { UPDATE_DATA, UPDATE_INPUT } = recipeSlice.actions;

export default recipeSlice.reducer;
