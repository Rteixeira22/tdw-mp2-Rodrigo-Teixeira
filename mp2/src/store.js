// store.js
import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./components/filtersSlice";
import { mealsApi } from "./components/apiRequest";

// Configure a store com o reducer de filtros e a API de refeições
const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [mealsApi.reducerPath]: mealsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealsApi.middleware),
});

export default store;
