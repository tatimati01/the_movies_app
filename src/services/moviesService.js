import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const moviesService = {
    getAllMovies: () => axiosService.get(urls.movies).then(value => console.log(value)),
    getMovieById: (movie_id) => axiosService.get(`${urls.movies}/${movie_id}`).then(value => console.log(value))
}