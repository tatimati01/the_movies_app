import React from 'react';
import {useDispatch} from "react-redux";
import {getMovieById} from "../../../store/movieSlice";

const MovieCard = ({movie}) => {
const {id, title} = movie;

const dispatch = useDispatch();

    return (
        <div>
            <h3>{id} - {title}</h3>
            <button onClick={()=>dispatch(getMovieById({id}))}>Details</button>
        </div>
    );
};

export default MovieCard;