import React from 'react';
import {useDispatch} from "react-redux";

const MovieCard = ({movie}) => {
const {id, title} = movie;

const dispatch = useDispatch();

    return (
        <div>
            <h3>{id} - {title}</h3>
            <button onClick={()=>dispatch()}>Details</button>
        </div>
    );
};

export default MovieCard;