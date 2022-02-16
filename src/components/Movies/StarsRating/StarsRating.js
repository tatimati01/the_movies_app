import React, {useState} from 'react';
import css from '../Movies.module.css'

const StarsRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className={css.starRating}>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? css.starRatingOn : css.starRatingOff}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}>
                        <span className={css.star}>&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
}

export default StarsRating;