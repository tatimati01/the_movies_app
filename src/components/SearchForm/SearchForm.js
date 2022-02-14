import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import css from '../../App.module.css'

const SearchForm = () => {
    const {handleSubmit, register, reset} = useForm();

    const dispatch = useDispatch();

    function onSearchSubmit(movieTitle) {
        dispatch()
        reset()
    }
    return (
        <div className={css.formStyle}>
            <form onSubmit={handleSubmit(onSearchSubmit)}>
                <input type="text" {...register('search')}/>
                <button>Search</button>
            </form>
        </div>
    );
};

export default SearchForm;