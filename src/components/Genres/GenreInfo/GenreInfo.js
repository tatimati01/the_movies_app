import React from 'react';
import {NavLink,Outlet} from "react-router-dom";
import css from '../Genres.module.css'

const GenreInfo = ({genre}) => {
    return (
        <div className={css.genreStyle}>
            <NavLink to={`${genre.name.toLowerCase()}`}>{genre.name}</NavLink>
        </div>
    );
};

export default GenreInfo;