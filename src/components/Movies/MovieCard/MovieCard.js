import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovieById, getMovieImage} from "../../../store/movieSlice";
import {moviesService} from "../../../services/moviesService";
import {Link} from "react-router-dom";
import MovieInfo from "../MovieInfo/MovieInfo";
import {axiosService} from "../../../services/axiosService";
import css from '../Movies.module.css'
import {imageURL, urls} from "../../../configs/urls";

const MovieCard = ({movie}) => {
    const {id, title, backdrop_path, overview} = movie;
    console.log(movie);

    return (
        <div className={css.movieItem}>
            <div className={css.imageBox}>
                <img src={`${imageURL}/w200${backdrop_path}`} alt={title}/>
            </div>
            <div className={css.titleBox}>
                <h3>{title}</h3>
            </div>
            <div className={css.overviewBox}>
                <p>{overview}</p>
            </div>
            <div className={css.btnDetails}>
                <button>
                    <Link to={id.toString()}>Details</Link>
                </button>
            </div>
        </div>
    );
};

export default MovieCard;