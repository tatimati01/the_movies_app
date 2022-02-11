import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./movieSlice";
import genresReducer from "./genreSlice";

const store = configureStore({
    reducer: {
        moviesReducer,
        genresReducer
    }
});

export default store

