import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../features/pageSlice";
import watchListReducer from "../features/watchListSlice"
import moviesReducer from "../features/moviesSlice"

export const store = configureStore({
    reducer : {
        page: pageReducer,
        moviesWatchList: watchListReducer,
        allMovies: moviesReducer

    },
})