import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {getMovieById} from "../../../store/movieSlice";
import css from '../Movies.module.css'
import {imageURL} from "../../../configs/urls";
import StarsRating from "../StarsRating/StarsRating";

const MovieInfo = () => {
    const {movieId} = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieById(movieId))
    }, [movieId, dispatch])

    const {movie} = useSelector(state => state['moviesReducer']);

    const {
        title,
        poster_path,
        budget,
        original_language,
        original_title,
        overview,
        release_date,
        tagline,
        vote_average
    } = movie

    return (
        <div className={css.movieInfoPage}>

            <div className={css.imageBox}>
                <img src={`${imageURL}/w400${poster_path}`} alt={title}/>
            </div>

            <div className={css.movieInfoBox}>

                <div className={css.movieTitle}>
                    <h1>{title} ({original_title})</h1>
                </div>

                <div className={css.movieDescription}>
                    <p className={css.movieOverviewText}>{overview}</p>
                    <p><b>Release date:</b> {release_date}</p>
                    <p><b>Tagline:</b> {tagline}</p>
                    <p><b>Original language:</b> {original_language}</p>
                    <p><b>Budget:</b> ${budget}</p>
                    <p><b>Vote average:</b> {vote_average}</p>
                    <StarsRating />
                </div>

            </div>

        </div>
    );
};

export default MovieInfo;