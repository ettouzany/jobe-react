import axios from "axios";
import authHeader from "./auth/auth-header";

const API_URL = "https://joba-be.herokuapp.com/jobs";



//add a new job
const addJob = (job) => {
    return axios.post(API_URL, job, { headers: authHeader() });
};

const getJobs = ({search,location,categorie,filters,start}) => {
    //add params ro axios get request
    const params = new URLSearchParams();
    
    params.append('search', search);
    params.append('location', location);
    params.append('categorie', categorie);
    params.append('filters', filters);
    params.append('start', start);
    return axios.get(API_URL+ "",{ headers: authHeader(),params });
};

const getAllPublicJobs = () => {
    return axios.get(API_URL + "/public");
};

const getAllPrivateJobs = () => {
    return axios.get(API_URL + "/private", { headers: authHeader() });
};



const jobService = {
    addJob,
    getJobs,
    getAllPublicJobs,
    getAllPrivateJobs,
};

export default jobService;