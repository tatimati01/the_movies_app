import React, {useEffect} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from '../../../App.module.css';

import {useDispatch, useSelector} from "react-redux";
import {getAllMovies, getMovieGenresList, getMovieOfGenre, goNextPage, goPrevPage} from "../../../store/movieSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../../../services/moviesService";
import {genresService} from "../../../services/genresService";
import MovieCard from "../../Movies/MovieCard/MovieCard";

const MoviesOfGenre = ({name}) => {
    const {moviesOfGenre} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();
    console.log(name);
// const {name} = genre

    useEffect((name) => {
        dispatch(getMovieOfGenre(name))
    }, [dispatch, name])


    return (
        <div>
            {moviesOfGenre.map(movie=> <MovieCard key={movie.id} movie={movie}/>)}
            {/*<div className={css.prevNextBox}>*/}
            {/*    <button disabled={pageNumber <= 1} onClick={() => {*/}
            {/*        dispatch(goPrevPage(pageNumber))*/}
            {/*    }}>Previous page*/}
            {/*    </button>*/}
            {/*    <p className={css.currentPage}>{pageNumber}</p>*/}
            {/*    <p className={css.pageNumbers}>{pageNumber+1}</p>*/}
            {/*    <p className={css.pageNumbers}>{pageNumber+2}</p>*/}
            {/*    <button disabled={pageNumber >= 1000} onClick={() => {*/}
            {/*        dispatch(goNextPage(pageNumber))*/}
            {/*    }}>Next page*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
};

export default MoviesOfGenre;