import React from 'react';

const MovieCard = ({movie}) => {
const {id, title} = movie

    return (
        <div>
            {id} - {title}
        </div>
    );
};

export default MovieCard;