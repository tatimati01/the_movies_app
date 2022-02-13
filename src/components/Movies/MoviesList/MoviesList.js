import React, {useEffect} from 'react';
import MovieCard from "../MovieCard/MovieCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies} from "../../../store/movieSlice";


const MoviesList = () => {
    const {movies, status, error} = useSelector(state => state['moviesReducer']);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllMovies())
    })

    return (<div>
            {movies && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>);
};

export default MoviesList;