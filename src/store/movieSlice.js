import {createSlice} from "@reduxjs/toolkit";
// import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";

// createAsyncThunk()

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: {}
    },
    reducers: {
        getMovies: ((state, action) => {

        })
    }
});


const moviesReducer = movieSlice.reducer;
export default moviesReducer;

export const {getMovies} = movieSlice.actions;