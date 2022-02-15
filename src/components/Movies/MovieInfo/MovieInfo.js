import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovieById} from "../../../store/movieSlice";
import {moviesService} from "../../../services/moviesService";
import {useParams} from "react-router-dom";

const MovieInfo = () => {

    // const {id, title, backdrop_path, overview, genre_ids} = movie;

    const {id, title, overview} = useSelector(state=> state['moviesReducer']);
console.log(id);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getMovieById(id))
    },[dispatch,id])

    return (
        <div>
            {title}
            {overview}
        </div>
    );
};

export default MovieInfo;