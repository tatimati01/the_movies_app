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

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: {
        genres: [],
        status: null,
        error: null
    },
    reducers: {
        // getGenres: ((state, action) => {
        //
        // })
    },
    extraReducers: {
        [getAllGenres.pending]: (state, action) => {
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
        }
    }
});

const genresReducer = genreSlice.reducer;
export default genresReducer;

// export const {getGenres} = genreSlice.actions;