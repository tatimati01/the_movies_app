import {axiosService} from "./axiosService";
import {apiKey, imageURL, language, urls} from "../configs/urls";

export const moviesService = {
    getAllMovies: () => axiosService.get(`${urls.movies}?api_key=${apiKey}`),
    getMovieById: (movieId) => axiosService
        .get(`${urls.movie}/${movieId}?api_key=${apiKey}`),
    // getMovieImage: (movieId) => axiosService
    //     .get(`${urls.movie}/${movieId}/images?api_key=${apiKey}`),
    // getMovieImage: (width,path)=> axiosService.get(`${imageURL}/w${width}${path}?api_key=${apiKey}`).then(value => console.log(value)),
    getMovieByTitle: ()=> axiosService.get(`${urls.search}`),
    getMovieImage: ()=> axiosService.get(`https://image.tmdb.org/t/p/w500/?api_key=${apiKey}/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg`)
}