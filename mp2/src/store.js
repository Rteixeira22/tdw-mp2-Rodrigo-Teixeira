import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./components/filtersSlice";
import { mealsApi } from "./components/apiRequest";
import mealReducer from "./components/mealSlice";
import favoritesReducer from "./components/favouritesSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [mealsApi.reducerPath]: mealsApi.reducer,
    meal: mealReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealsApi.middleware),
});

export default store;
