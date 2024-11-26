// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { apiRequest } from "./components/apiRequest";
import filtersReducer from "./components/filtersSlice";

const store = configureStore({
  reducer: {
    [apiRequest.reducerPath]: apiRequest.reducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRequest.middleware),
});

export default store;
