import {createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../services/moviesService";
// import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";

// createAsyncThunk()

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: {},
        search: ''
    },
    reducers: {
        getMovies: ((state, action) => {
            moviesService.getAllMovies().then(value => {
                const {data: {results}} = value;
                console.log(results);
            })
        }),
        getMovieByTitle: ((state, action) => {

        })
    }
});


const moviesReducer = movieSlice.reducer;
export default moviesReducer;

export const {getMovies,getMovieByTitle} = movieSlice.actions;