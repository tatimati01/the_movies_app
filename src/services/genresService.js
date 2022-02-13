import {axiosService} from "./axiosService";
import {apiKey, urls} from "../configs/urls";

export const genresService = {
    getAllGenres: ()=> axiosService.get(`${urls.genres}?api_key=${apiKey}`),
    // getGenreById: (genreId)=> axiosService.get(`${urls.genres}?api_key=${apiKey}`)
}