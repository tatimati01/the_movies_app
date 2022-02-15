import {createSlice} from "@reduxjs/toolkit";

const pagesSlice = createSlice({
    name: 'pagesSlice',
    initialState: {
        currentPage: 1
    },
    reducers: {
        goForward: (state, action) => {
            state.currentPage += 1
        },
        goBack: (state, action) => {
            state.currentPage -= 1
        }
    }
});