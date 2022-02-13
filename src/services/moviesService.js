import {axiosService} from "./axiosService";
import {apiKey, urls} from "../configs/urls";

export const moviesService = {
    getAllMovies: () => axiosService.get(`${urls.movies}?api_key=${apiKey}`),
    getMovieById: (movieId) => axiosService
        .get(`${urls.movies}/${movieId}?api_key=${apiKey}`)
        .then(value => console.log(value)),
    getMovieByTitle: ()=> axiosService.get(`${urls.search}`)
}