import { createSlice } from "@reduxjs/toolkit";

// Estado inicial com filtros vazios
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
      return { ...state, ...action.payload }; // Atualiza os filtros no estado
    },
    resetFilters: () => initialState, // Reseta os filtros para o estado inicial
  },
});

// Exportando as ações
export const { setFilters, resetFilters } = filtersSlice.actions;

// Exportando o reducer para ser utilizado na store
export default filtersSlice.reducer;
