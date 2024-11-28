import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealsApi = createApi({
  reducerPath: "mealsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    fetchMealsByCategory: builder.query({
      query: ({ category, area, ingredient }) => {
        if (category) {
          return `filter.php?c=${category}`;
        } else if (area) {
          return `filter.php?a=${area}`;
        } else if (ingredient) {
          return `filter.php?i=${ingredient}`;
        }
        return "";
      },
    }),
    fetchMealById: builder.query({
      query: (mealId) => {
        return `lookup.php?i=${mealId}`;
      },
    }),
    fetchMealCategories: builder.query({
      query: () => {
        return `categories.php`;
      },
    }),
  }),
});

export const {
  useFetchMealsByCategoryQuery,
  useFetchMealByIdQuery,
  useFetchMealCategoriesQuery,
} = mealsApi;
