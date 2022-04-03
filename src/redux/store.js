import { configureStore } from '@reduxjs/toolkit'
import movieSliceReducer from './slices/movieSlice'

export const store = configureStore({
  reducer: {
      movies: movieSliceReducer
  },
})