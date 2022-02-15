import React, {useEffect} from 'react';
import css from '../../App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getAllMovies} from "../../store/movieSlice";
import MoviesList from "../../components/Movies/MoviesList/MoviesList";
import GenresList from "../../components/Genres/GenresList/GenresList";

const HomePage = () => {

    return (
        <div className={css.homePageWrapper}>
            <div className={css.leftSideWrapper}>
                <GenresList/>
            </div>
            <div className={css.rightSideWrapper}>
                <MoviesList/>
            </div>
        </div>
    );
};

export default HomePage;