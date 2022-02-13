import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {getMovieByTitle} from "../../store/movieSlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchForm = () => {
    const {handleSubmit, register, reset} = useForm();

    const dispatch = useDispatch();

    function onSearchSubmit(movieTitle) {
        dispatch(getMovieByTitle({movieTitle}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSearchSubmit)}>
                <input type="text" {...register('search')}/>
                <button><FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/>Search</button>
            </form>
        </div>
    );
};

export default SearchForm;