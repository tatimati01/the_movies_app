import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../services/genresService";


export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const genres = await genresService.getAllGenres().then(value => value.data.genres)
            return genres
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);


export const getGenreByName = createAsyncThunk(
    'genreSlice/getGenreByName',
    async (genreName, {rejectWithValue}) => {
        try {
            const genre = await genresService.getGenreById(genreName).then(value => value)
            return genre
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: {
        genres: [],
        genre: null,
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllGenres.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.genres = action.payload
        },
        [getAllGenres.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },


        [getGenreByName.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getGenreByName.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.genre = action.payload
        },
        [getGenreByName.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
});

const genresReducer = genreSlice.reducer;
export default genresReducer;