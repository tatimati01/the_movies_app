import React from 'react';
import GenresList from "../../components/Genres/GenresList/GenresList";
import css from '../../components/Genres/Genres.module.css'
import {Outlet} from "react-router-dom";

const GenresPage = () => {
    return (
        <div className={css.genresWrapper}>
            <GenresList/>
            <Outlet/>
        </div>
    );
};

export default GenresPage;