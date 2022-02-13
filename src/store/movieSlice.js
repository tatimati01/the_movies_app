import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../services/moviesService";

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_, {rejectWithValue}) => {
        try {
            const movies = await moviesService.getAllMovies().then(value => value.data.results)
            // console.log(movies);
            return movies
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: {},
        search: '',
        status: null,
        error: null
    },
    reducers: {
        // getMovies: ((state, action) => {
        //     moviesService.getAllMovies().then(value => {
        //         const {data: {results}} = value;
        //         console.log(results);
        //     })
        // }),
        // getMovieById: ((state, action) => {
        //
        // }),
        // getMovieByTitle: ((state, action) => {
        //     const movieTitle = action.payload.movieTitle;
        //     console.log(movieTitle);
        //     console.log(state.movies.movie.title);
        // })
    },
    extraReducers: {
        [getAllMovies.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});


const moviesReducer = movieSlice.reducer;
export default moviesReducer;

// export const {getMovies, getMovieById, getMovieByTitle} = movieSlice.actions;