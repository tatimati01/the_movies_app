import React from 'react';
import {useForm} from "react-hook-form";
import css from '../../App.module.css'

const SearchForm = () => {
    const {handleSubmit, register, reset} = useForm();

    function onSearchSubmit(movieTitle) {
        console.log(movieTitle);
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