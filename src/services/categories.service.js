import axios from "./axios/axios.global";
import authHeader from "./auth/auth-header";

const API_URL = "http://localhost:3000/categories";

const getCategories = () => {
    return axios.get(API_URL);
};

const categorieService = {
    getCategories
};

export default categorieService;