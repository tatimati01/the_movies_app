import React, {useEffect} from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {getMovies} from "../../../store/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
// import {moviesService} from "../../../services/moviesService";
import {useDispatch, useSelector} from "react-redux";


const MoviesList = () => {
    const {movies} = useSelector(state => state['movieReducer']);
    // const [movies, setMovies] = useState([]);
    //
    // useEffect(() => {
    //     moviesService.getAllMovies().then(value => {
    //         const {data: {results}} = value;
    //         setMovies(results);
    //     })
    // }, [])
    //
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch()
    })

    return (<div>
            {movies && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>);
};

export default MoviesList;