import React from 'react';
import {useNavigate} from "react-router-dom";

import css from '../Movies.module.css'
import {imageURL} from "../../../configs/urls";

const MovieCard = ({movie}) => {
    const {id, title, backdrop_path, overview} = movie;

    const navigator = useNavigate();

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
                <button onClick={() => navigator(id.toString())}>Details</button>
            </div>

        </div>
    );
};

export default MovieCard;