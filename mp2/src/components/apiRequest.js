import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealsApi = createApi({
  reducerPath: "mealsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    fetchMealsByCategory: builder.query({
      query: (category) => `filter.php?c=${category}`,
    }),
    fetchMealById: builder.query({
      query: (mealId) => {
        console.log("Fetching meal with ID:", mealId);
        return `lookup.php?i=${mealId}`;
      },
    }),
  }),
});

export const { useFetchMealsByCategoryQuery, useFetchMealByIdQuery } = mealsApi;
