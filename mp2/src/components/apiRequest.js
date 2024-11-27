import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealsApi = createApi({
  reducerPath: "mealsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    // Listar refeições por categoria
    fetchMealsByCategory: builder.query({
      query: (category) => `filter.php?c=${category}`, // Filtra refeições pela categoria
    }),
    // Detalhes de uma refeição específica
    fetchMealById: builder.query({
      query: (mealId) => `lookup.php?i=${mealId}`, // Busca refeição pelo ID
    }),
  }),
});

export const { useFetchMealsByCategoryQuery, useFetchMealByIdQuery } = mealsApi;
