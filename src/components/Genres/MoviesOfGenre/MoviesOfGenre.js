import React from 'react';
import {NavLink,Outlet} from "react-router-dom";
import css from '../Genres.module.css'

const MoviesOfGenre = ({name}) => {
    return (
        <div className={css.genreStyle}>
            <NavLink to={`${name.toLowerCase()}`}>{name}</NavLink>
        </div>
    );
};

export default MoviesOfGenre;