import axios from "axios";
import authHeader from "./auth/auth-header";

const API_URL = "https://joba.onrender.com";




//get jobs statistics
const getJobsStatistics = () => {
    return axios.get(API_URL + "/jobs/statistics", { headers: authHeader() });
};


const statisticsService = {
    getJobsStatistics,
};

export default statisticsService;