import {axiosService} from "./axiosService";
import {apiKey, urls} from "../configs/urls";

export const moviesService = {
    getAllMovies: (pageNumber) => axiosService.get(`${urls.movies}?api_key=${apiKey}&page=${pageNumber}`),
    getMovieById: (movieId) => axiosService.get(`${urls.movie}/${movieId}?api_key=${apiKey}`),
}