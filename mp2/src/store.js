import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./components/filtersSlice";
import { mealsApi } from "./components/apiRequest";
import mealReducer from "./components/mealSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [mealsApi.reducerPath]: mealsApi.reducer,
    meal: mealReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealsApi.middleware),
});

export default store;
