import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getMovieById} from "../../../store/movieSlice";
import {moviesService} from "../../../services/moviesService";
import {Link} from "react-router-dom";
import MovieInfo from "../MovieInfo/MovieInfo";
import {axiosService} from "../../../services/axiosService";
import css from '../Movies.module.css'
import {imageURL, urls} from "../../../configs/urls";

const MovieCard = ({movie}) => {
    const {id, title, backdrop_path} = movie;
const dispatch = useDispatch();
useEffect(()=> {
    dispatch()
},[])



    return (
        <div className={css.movieItem}>
            <img src={movieImage} alt={title}/>
            <h3>{id} - {title}</h3>
            <button><Link to={id.toString()} state={movie}>Details</Link></button>
        </div>
    );
};

export default MovieCard;