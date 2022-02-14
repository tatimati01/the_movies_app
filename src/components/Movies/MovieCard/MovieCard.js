import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {getMovieGenresList} from "../../../store/movieSlice";
import css from '../Movies.module.css'
import {imageURL} from "../../../configs/urls";

const MovieCard = ({movie}) => {
    const {id, title, backdrop_path, overview, genre_ids} = movie;

    const {movieGenresList} = useSelector(state => state['moviesReducer']);



//     const movieGenresGetter = (id) => {
//         for (const genre of genres) {
// const array = []
//             if (genre.id===genre_ids) {
//                 array.push(genre.id)
//                 console.log(array);
//             }
//         }
//     }
//
//     console.log(movieGenresGetter(id));
//     // const genresId = genres.map(genre=> genre_ids.filter(item=> item === genre.id))
//     //
//     // console.log(genresId);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getMovieGenresList())
    }, [dispatch])

    return (
        <div className={css.movieItem}>
            <div className={css.imageBox}>
                <img src={`${imageURL}/w200${backdrop_path}`} alt={title}/>
            </div>
            <div className={css.titleBox}>
                <h3>{title}</h3>
            </div>
            <div className={css.overviewBox}>
                <p>{overview}</p>
            </div>
            {/*<div className={css.genresListItem}>*/}
            {/*    {movieGenresList.map((genre) =>*/}
            {/*        <p key={genre.name}>*/}
            {/*            - {genre.name}*/}
            {/*        </p>)}*/}
            {/*</div>*/}
            <div className={css.btnDetails}>
                <button>
                    <Link to={id.toString()}>Details</Link>
                </button>
            </div>
        </div>
    );
};

export default MovieCard;