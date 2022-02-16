import React from 'react';

import GenresList from "../../components/Genres/GenresList/GenresList";
import css from '../../components/Genres/Genres.module.css'

const GenresPage = () => {
    return (
        <div className={css.genresPageStyle}>

            <div className={css.genresWrapper}>
                <GenresList/>
            </div>

        </div>
    );
};

export default GenresPage;