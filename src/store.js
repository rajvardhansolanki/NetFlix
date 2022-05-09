import { configureStore } from "@reduxjs/toolkit"
import movieSlice from "./Redux/MovieSlice"

export const store = configureStore({
  reducer: {
    movies: movieSlice
  },
})