import React from 'react';
import MoviesList from "../../components/Movies/MoviesList/MoviesList";
import {Outlet} from "react-router-dom";

const MoviesPage = () => {
    return (
        <div>
            <Outlet/>
            <MoviesList/>
        </div>
    );
};

export default MoviesPage;