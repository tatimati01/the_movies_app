import React, {useEffect, useState} from 'react';
// import {getGenres} from "../../../store/genreSlice";
import {genresService} from "../../../services/genresService";
import GenreInfo from "../GenreInfo/GenreInfo";
// import {useSelector} from "react-redux";

const GenresList = () => {
    const [genres,setGenres] = useState([]);
    
    useEffect(()=> {
        genresService.getAllGenres().then(value => console.log(value.data))
    })


    return (
        <div>
            GenresList
            {genres.map(genre=> <GenreInfo key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default GenresList;