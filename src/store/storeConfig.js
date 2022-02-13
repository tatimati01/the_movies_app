import {configureStore} from "@reduxjs/toolkit";

import genresReducer from "./genreSlice";
import moviesReducer from "./movieSlice";

const store = configureStore({
    reducer: {
        moviesReducer,
        genresReducer
    }
});

export default store

