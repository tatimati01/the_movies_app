import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovieById} from "../../../store/movieSlice";
import {moviesService} from "../../../services/moviesService";

const MovieInfo = () => {

    const {id, title, overview} = useSelector(state=> state['moviesReducer']);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getMovieById(id))

    },[dispatch,id])
    // const goToMovieInfo = () => {
    //     dispatch(getMovieById({id}))
    //     moviesService.getMovieById()
    // }

    return (
        <div>
            {title}
            {overview}
        </div>
    );
};

export default MovieInfo;