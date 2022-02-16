import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";

import {getAllGenres} from "../../../store/genreSlice";
import css from '../Genres.module.css';
import MoviesOfGenre from "../MoviesOfGenre/MoviesOfGenre";

const GenresList = () => {
    const {genres, status, error} = useSelector(state => state['genresReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, [dispatch])
    
    const navigator = useNavigate();

    return (
        <div>
            <div className={css.genresBar}>

                {status === 'pending' && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {genres.map(genre =>
                    <div key={genre.name} className={css.genreStyle}>
                        <button onClick={()=> navigator(genre.name)}>
                            <NavLink to={`${genre.name}`} genre={genre}>
                                {genre.name}
                            </NavLink>
                        </button>
                    </div>
                )}
            </div>

            {<MoviesOfGenre/>}

        </div>

    );
};

export default GenresList;