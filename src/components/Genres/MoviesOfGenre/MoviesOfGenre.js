import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from '../../../App.module.css';
import genresCss from '../Genres.module.css'
import {getAllMovies, goNextPage, goPrevPage} from "../../../store/movieSlice";
import MovieCard from "../../Movies/MovieCard/MovieCard";

const MoviesOfGenre = () => {

    const {pageNumber, movies} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies(pageNumber))
    }, [pageNumber,dispatch])

    return (
        <div className={genresCss.moviesOfGenreWrapper}>
            {movies.map(movie=> <MovieCard key={movie.id} movie={movie}/>)}
            <div className={css.prevNextBox}>
                <button disabled={pageNumber <= 1} onClick={() => {
                    dispatch(goPrevPage(pageNumber))
                }}>Previous page
                </button>
                <p className={css.currentPage}>{pageNumber}</p>
                <p className={css.pageNumbers}>{pageNumber + 1}</p>
                <p className={css.pageNumbers}>{pageNumber + 2}</p>
                <button disabled={pageNumber >= 1000} onClick={() => {
                    dispatch(goNextPage(pageNumber))
                }}>Next page
                </button>
            </div>
        </div>
    );
};

export default MoviesOfGenre;