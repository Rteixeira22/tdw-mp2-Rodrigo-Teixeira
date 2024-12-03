import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favoriteMeals")) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const meal = action.payload;
      if (!state.favorites.some((fav) => fav.idMeal === meal.idMeal)) {
        state.favorites.push(meal);

        localStorage.setItem("favoriteMeals", JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.idMeal !== action.payload,
      );

      localStorage.setItem("favoriteMeals", JSON.stringify(state.favorites));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
