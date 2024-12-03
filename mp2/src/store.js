import { configureStore } from "@reduxjs/toolkit";
import { mealsApi } from "./components/apiRequest";
import mealReducer from "./components/mealSlice";
import favoritesReducer from "./components/favouritesSlice";

const store = configureStore({
  reducer: {
    [mealsApi.reducerPath]: mealsApi.reducer,
    meal: mealReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealsApi.middleware),
});

export default store;
