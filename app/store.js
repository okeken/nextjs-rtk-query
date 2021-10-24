import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from '../services/api'

export const store = configureStore({
    reducer: {
      [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rickAndMortyApi.middleware),
  })