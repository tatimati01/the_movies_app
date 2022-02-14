import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../services/moviesService";

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_, {rejectWithValue}) => {
        try {
            const movies = await moviesService.getAllMovies().then(value => value.data.results)
            return movies
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const getMovieById = createAsyncThunk(
    'movieSlice/getMovieById',
    async (id,{rejectWithValue})=> {
        try {
            const movieId = id.id;
            const movie = await moviesService.getMovieById(movieId).then(value => value.data)
            return movie
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const getMovieImage = createAsyncThunk(
    'movieSlice/getMovieImage',
    async (id,{rejectWithValue})=> {
        try {
            const movieId = id;
            const images = await moviesService.getMovieImage(movieId).then(value => value.data.posters)
            // console.log(images);
            return images
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        movie: {},
        search: '',
        status: null,
        error: null,
        images: []
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
        },
        [getMovieById.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getMovieById.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movie = action.payload
        },
        [getMovieById.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [getMovieImage.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.images = action.payload
            // console.log(action.payload);
        }
    }
});


const moviesReducer = movieSlice.reducer;
export default moviesReducer;

// export const {getMovies, getMovieById, getMovieByTitle} = movieSlice.actions;