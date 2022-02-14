import React, {useEffect} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from '../Genres.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies, getMovieGenresList} from "../../../store/movieSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../../../services/moviesService";
import {genresService} from "../../../services/genresService";

const MoviesOfGenre = ({genre}) => {
    const {movieGenresList} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieGenresList())
    }, [dispatch])




    return (
        <div>
            MoviesOfGenre
            {/*{movieGenresList && movieGenresList.map(movieGenre=> <p>*/}
            {/*    {movieGenre.name}*/}
            {/*</p>)}*/}
        </div>
    );
};

export default MoviesOfGenre;