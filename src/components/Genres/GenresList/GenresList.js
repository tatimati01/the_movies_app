import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Outlet} from "react-router-dom";

import {getAllGenres} from "../../../store/genreSlice";
import css from '../Genres.module.css';
import MoviesOfGenre from "../MoviesOfGenre/MoviesOfGenre";
import {moviesService} from "../../../services/moviesService";

const GenresList = () => {
    const {genres, status, error} = useSelector(state => state['genresReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, [dispatch])

    return (
        <div>
            <div className={css.genresBar}>
                {status === 'pending' && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {genres.map(genre =>
                    <div key={genre.name} className={css.genreStyle}>
                        <button>
                            <NavLink to={`${genre.name.toLowerCase()}`} name={genre.name}>{genre.name}</NavLink>
                        </button>
                    </div>
                )}
            </div>
            {<MoviesOfGenre/>}
        </div>

    );
};

export default GenresList;