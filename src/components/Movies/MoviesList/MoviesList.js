import React, {useEffect} from 'react';
import MovieCard from "../MovieCard/MovieCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies} from "../../../store/movieSlice";
import css from '../Movies.module.css'


const MoviesList = () => {
    const {movies, status, error} = useSelector(state => state['moviesReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies())
    }, [dispatch])

    return (
        <div className={css.movieWrapper}>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>);
};

export default MoviesList;