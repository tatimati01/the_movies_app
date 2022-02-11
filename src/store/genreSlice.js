import {createSlice} from "@reduxjs/toolkit";

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: {},
    reducers: {
        getGenres: ((state, action) => {

        })
    }
});

const genresReducer = genreSlice.reducer;
export default genresReducer;

export const {getGenres} = genreSlice.actions;