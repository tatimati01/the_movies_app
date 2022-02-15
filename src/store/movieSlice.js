import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../services/moviesService";
import {genresService} from "../services/genresService";


export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (pageNumber, {rejectWithValue}) => {
        try {
            const movies = await moviesService.getAllMovies(pageNumber).then(value => value.data.results)
            return movies
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);


export const getMovieById = createAsyncThunk(
    'movieSlice/getMovieById',
    async (id, {rejectWithValue}) => {
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
    async (id, {rejectWithValue}) => {
        try {
            const images = await moviesService.getMovieImage(id).then(value => value.data.posters)
            return images
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const getMovieOfGenre = createAsyncThunk(
    'movieSlice/getMovieOfGenre',
    async ({genreName,pageNumber},{rejectWithValue}) => {
        try {
            const moviesOfGenre = await moviesService.getMoviesOfGenre(genreName,pageNumber).then(value => console.log(value))
            return moviesOfGenre
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
);
// export const getMovieGenresList = createAsyncThunk(
//     'movieSlice/getMovieGenresList',
//     async (id, {rejectWithValue}) => {
//         const getters = [
//             moviesService.getAllMovies().then(value => value.data.results),
//             genresService.getAllGenres().then(value => value.data.genres)
//         ]
//
//         try {
//             const [movies, genres] = await Promise.all(getters)
//
//             const allMoviesGenres = movies.map(movieGenres => {
//                 const {genre_ids} = movieGenres;
//
//                 const movieGenresList = genre_ids.map(genreId => genres.find(item => item.id === genreId))
//
//                 return {
//                     ...movieGenres,
//                     movieGenresList
//                 }
//             })
//         } catch (e) {
//             return rejectWithValue(e.message)
//         }
//     }
// );

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        movie: {},
        search: '',
        status: null,
        error: null,
        images: [],
        moviesOfGenre: [],
        pageNumber: 1
    },
    reducers: {
        goNextPage: (state, action) => {
            state.pageNumber = state.pageNumber + 1
        },
        goPrevPage: (state, action) => {
            state.pageNumber = state.pageNumber - 1
        }
    },
    extraReducers: {
        [getAllMovies.pending]: (state) => {
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


        [getMovieById.pending]: (state) => {
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


        [getMovieImage.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getMovieImage.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.images = action.payload
        },
        [getMovieImage.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },


        // [getMovieGenresList.pending]: (state) => {
        //     state.status = 'pending'
        //     state.error = null
        // },
        // [getMovieGenresList.fulfilled]: (state, action) => {
        //     state.status = 'fulfilled'
        //     state.movieGenresList = action.payload
        // },
        // [getMovieGenresList.rejected]: (state, action) => {
        //     state.status = 'rejected'
        //     state.error = action.payload
        // }

        [getMovieOfGenre.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getMovieOfGenre.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.moviesOfGenre = action.payload
            // console.log(state.moviesOfGenre);
        },
        [getMovieOfGenre.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
});
export const {goNextPage,goPrevPage} = movieSlice.actions

const moviesReducer = movieSlice.reducer;
export default moviesReducer;
