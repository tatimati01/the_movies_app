import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import MovieCard from "../MovieCard/MovieCard";
import {getAllMovies} from "../../../store/movieSlice";
import css from '../Movies.module.css'
import {useNavigate} from "react-router-dom";


const MoviesList = () => {
    const {movies, status, error} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();

    useNavigate()

    useEffect(() => {
        dispatch(getAllMovies())
    }, [dispatch])

    return (
        <div className={css.movieWrapper}>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {movies.map(movie =>
                <MovieCard key={movie.id} movie={movie}/>
            )}
            <div>
            <button onClick={(e)=>e.preventDefault()}>Previous page</button>
            <button onClick={(e)=>e.preventDefault()}>Next page</button>
            </div>
        </div>);
};

export default MoviesList;