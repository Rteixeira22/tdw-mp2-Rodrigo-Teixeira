import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  ingredient: "",
  cuisine: "",
  priceRange: "",
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => initialState,
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
