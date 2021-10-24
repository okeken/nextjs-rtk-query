import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (page=1) => `character?page=${page}`, 
    }),

    getCharacterDetails: builder.query({
      query: (id) => `/character/${id}`,
    }),

  }),
});

export const { useGetCharactersQuery, useGetCharacterDetailsQuery } =  rickAndMortyApi;