import React, {useEffect} from 'react';
import GenreInfo from "../GenreInfo/GenreInfo";
import {useDispatch, useSelector} from "react-redux";
import {getAllGenres} from "../../../store/genreSlice";
import css from '../Genres.module.css'

const GenresList = () => {
    const {genres, status, error} = useSelector(state => state['genresReducer']);
    // console.log(genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
        console.log(genres);
    }, [dispatch, genres])


    return (
        <div className={css.genresBar}>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {/*{genres.map(genre=> <GenreInfo key={genre.id} genre={genre}/>)}*/}
            <div className={css.genreStyle}>
                {genres && genres.map(genre =>
                    <div key={genre.name}>
                        {genre.name}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GenresList;