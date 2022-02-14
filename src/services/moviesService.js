import {axiosService} from "./axiosService";
import {apiKey, urls} from "../configs/urls";

export const moviesService = {
    getAllMovies: () => axiosService.get(`${urls.movies}?api_key=${apiKey}`),
    getMovieById: (movieId) => axiosService
        .get(`${urls.movie}/${movieId}?api_key=${apiKey}`),
    getMovieByTitle: ()=> axiosService.get(`${urls.search}`),
    getMovieImage: ()=> axiosService.get(`https://image.tmdb.org/t/p/w500/?api_key=${apiKey}/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg`)
}