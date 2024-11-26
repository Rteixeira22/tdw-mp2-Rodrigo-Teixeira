import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiRequest = createApi({
  reducerPath: "apiRequest",
  baseQuery: fetchBaseQuery({ baseUrl: "https://anapioficeandfire.com/api/" }), // substitua pela URL da sua API
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({ page, filters }) => {
        const { gender, culture, seasons } = filters;
        let query = `characters?page=${page}`;

        // Adiciona os filtros à URL da API
        if (gender) query += `&gender=${gender}`;
        if (culture) query += `&culture=${culture}`;
        if (seasons) query += `&seasons=${seasons}`;

        console.log("Query URL: ", query);

        return query;
      },
      transformResponse: (response, meta, arg) => {
        console.log("API Response: ", response); // Log da resposta da API para depuração
        return response;
      },
      // Em caso de erro, podemos também ver o status da resposta
      onError: (error) => {
        console.log("API Error: ", error); // Log do erro da API
      },
    }),
  }),
});

export const { useGetCharactersQuery } = apiRequest;
