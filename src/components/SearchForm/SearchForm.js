import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {getMovieByTitle} from "../../store/movieSlice";

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
                <button>Search</button>
            </form>
        </div>
    );
};

export default SearchForm;