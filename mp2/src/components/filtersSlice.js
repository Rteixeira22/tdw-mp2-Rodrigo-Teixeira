// src/features/filters/filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gender: "",
  culture: "",
  seasons: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;