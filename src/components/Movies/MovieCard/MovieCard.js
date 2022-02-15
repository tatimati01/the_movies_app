import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import {getMovieById, getMovieGenresList} from "../../../store/movieSlice";
import css from '../Movies.module.css'
import {imageURL} from "../../../configs/urls";

const MovieCard = ({movie}) => {
    const {id, title, backdrop_path, overview, genre_ids} = movie;
    const dispatch = useDispatch();
    const navigater = useNavigate();
    //
    // const getToDetails = (id)=> {
    //     navigater(`${id.toString()}`)
    // }

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