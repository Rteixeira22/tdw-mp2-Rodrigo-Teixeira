import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiRequest = createApi({
  reducerPath: "apiRequest",
  baseQuery: fetchBaseQuery({ baseUrl: "https://anapioficeandfire.com/api/" }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({ page, filters }) => {
        const { gender, culture, seasons, name } = filters;
        let query = `characters?page=${page}`;

        // Adiciona os filtros à URL da API
        if (gender) query += `&gender=${gender}`;
        if (culture) query += `&culture=${culture}`;
        if (seasons) query += `&seasons=${seasons}`;
        if (name) query += `&name=${name}`;

        return query;
      },
      transformResponse: (response) => {
        console.log("API Response: ", response);
        return response;
      },

      onError: (error) => {
        console.log("API Error: ", error);
      },
    }),
  }),
});

export const { useGetCharactersQuery } = apiRequest;
