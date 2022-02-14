import {axiosService} from "./axiosService";
import {apiKey, urls} from "../configs/urls";

export const moviesService = {
    getAllMovies: () => axiosService.get(`${urls.movies}?api_key=${apiKey}`),
    getMovieById: (movieId) => axiosService
        .get(`${urls.movie}/${movieId}?api_key=${apiKey}`),
    getMovieImage: (movieId) => axiosService
        .get(`${urls.movie}/${movieId}/images?api_key=${apiKey}`),
    getMovieByTitle: ()=> axiosService.get(`${urls.search}`)
}