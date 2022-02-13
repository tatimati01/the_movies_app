import React, {useEffect} from 'react';
import GenreInfo from "../GenreInfo/GenreInfo";
import {useDispatch, useSelector} from "react-redux";
import {getAllGenres} from "../../../store/genreSlice";
import css from '../Genres.module.css';
import {Outlet} from "react-router-dom";

const GenresList = () => {
    const {genres, status, error} = useSelector(state => state['genresReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, [dispatch])


    return (
        <div className={css.genresBar}>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {genres.map(genre=> <GenreInfo key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default GenresList;