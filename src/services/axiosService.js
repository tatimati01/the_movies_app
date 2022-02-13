import axios from "axios";

import baseURL, {apiKey} from "../constants/urls";

export const axiosService = axios.create({
    baseURL: baseURL,
});
