import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import MovieCard from "../MovieCard/MovieCard";
import {getAllMovies, goNextPage, goPrevPage} from "../../../store/movieSlice";
import css from '../Movies.module.css'


const MoviesList = () => {
    const {movies, status, error, pageNumber} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies(pageNumber))
    }, [dispatch, pageNumber])

    return (
        <div>
            <div className={css.movieWrapper}>
                {status === 'pending' && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {movies.map(movie =>
                    <MovieCard key={movie.id} movie={movie}/>
                )}
            </div>
            <div className={css.prevNextBox}>
                <button disabled={pageNumber <= 1} onClick={() => {
                    dispatch(goPrevPage(pageNumber))
                }}>Previous page
                </button>
                <p className={css.currentPage}>{pageNumber}</p>
                <p className={css.pageNumbers}>{pageNumber+1}</p>
                <p className={css.pageNumbers}>{pageNumber+2}</p>
                <button disabled={pageNumber >= 1000} onClick={() => {
                    dispatch(goNextPage(pageNumber))
                }}>Next page
                </button>
            </div>
        </div>)

};

export default MoviesList;