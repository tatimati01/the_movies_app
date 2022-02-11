import React from 'react';
import {useSelector} from "react-redux";

// import {getMovies} from '../../../store/movieSlice'

const MoviesList = () => {
    const {movies} = useSelector(state => state['moviesReducer']);
    //
    // const dispatch = useDispatch();
    //
    // useEffect(()=> {
    //     dispatch(getAllMovies())
    // },[dispatch()])


    return (
        <div>
            {movies}
        </div>
    );
};

export default MoviesList;