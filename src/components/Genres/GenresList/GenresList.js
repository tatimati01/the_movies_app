import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Outlet} from "react-router-dom";

import {getAllGenres} from "../../../store/genreSlice";
import css from '../Genres.module.css';

const GenresList = () => {
    const {genres, status, error} = useSelector(state => state['genresReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, [dispatch])

    // const moviesOfGenreGetter = (id) => {
    //
    // }
    return (
        <div>
            <div className={css.genresBar}>
                {status === 'pending' && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {genres.map(genre =>
                    <div key={genre.name} className={css.genreStyle}>
                        <button onClick={(e) => {
                            e.preventDefault()
                            // moviesOfGenreGetter(genre.id)
                        }}>
                            <NavLink to={`${genre.name.toLowerCase()}`} genre={genre}>{genre.name}</NavLink>
                        </button>
                    </div>
                )}
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>

    );
};

export default GenresList;