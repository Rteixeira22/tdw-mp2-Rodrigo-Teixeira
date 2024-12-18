import { createSlice } from "@reduxjs/toolkit";

const mealSlice = createSlice({
  name: "meal",
  initialState: {
    selectedMealId: null,
  },
  reducers: {
    setSelectedMealId: (state, action) => {
      state.selectedMealId = action.payload;
    },
  },
});

export const { setSelectedMealId } = mealSlice.actions;
export default mealSlice.reducer;
