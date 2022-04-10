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
    if(search) params.append("search", search);
    if(location) params.append("location", location);
    if(categorie) params.append("categorie", categorie);
    if(filters) params.append("filters", filters);
    if(start) params.append("start", start);
    return axios.get(API_URL+ "/all",{ headers: authHeader(),params });
};

const getmyJobs = ({search,location,categorie,filters,start}) => {
    //add params ro axios get request
    const params = new URLSearchParams();
    if(search) params.append("search", search);
    if(location) params.append("location", location);
    if(categorie) params.append("categorie", categorie);
    if(filters) params.append("filters", filters);
    if(start) params.append("start", start);
    return axios.get(API_URL+ "",{ headers: authHeader(),params });
};

//get a job by id
const getJobById = (id) => {
    return axios.get(API_URL + "/" + id, { headers: authHeader() });
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
    getmyJobs,
    getAllPublicJobs,
    getAllPrivateJobs,
    getJobById
};

export default jobService;