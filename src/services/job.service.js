import axios from "axios";
import authHeader from "./auth/auth-header";

const API_URL = "https://joba-be.herokuapp.com/jobs";



//add a new job
const addJob = (job) => {
    return axios.post(API_URL, job, { headers: authHeader() });
};

const getJobs = ({search,location,categorie,filters,limit,page}) => {
    //add params ro axios get request
    const params = new URLSearchParams();
    if(search) params.append("search", search);
    if(location) params.append("location", location);
    if(categorie) params.append("categorie", categorie);
    if(filters) params.append("filters", filters);
    if(limit) params.append("limit", limit);
    if(page) params.append("page", page);
    return axios.get(API_URL+ "/all",{ headers: authHeader(),params });
};

const getmyJobs = ({search,location,categorie,filters,limit,page,status}) => {
    //add params ro axios get request
    const params = new URLSearchParams();
    if(search) params.append("search", search);
    if(location) params.append("location", location);
    if(categorie) params.append("categorie", categorie);
    if(filters) params.append("filters", filters);
    if(limit) params.append("limit", limit);
    if(page) params.append("page", page);
    if(status) params.append("status", status);
    return axios.get(API_URL+ "",{ headers: authHeader(),params });
};

//get a job by id
const getJobById = (id) => {
    return axios.get(API_URL + "/" + id, { headers: authHeader() });
};


const updateJobById = (id, job) => {
    return axios.patch(API_URL + "/" + id, job, { headers: authHeader() });
};

const changeStatus = (ids, status) => {
    return axios.patch(API_URL + "/status", { ids, status }, { headers: authHeader() });
}

const deleteJobById = (id) => {
    return axios.delete(API_URL + "/" + id, { headers: authHeader() });
};
const jobService = {
    addJob,
    getJobs,
    getmyJobs,
    getJobById,
    updateJobById,
    changeStatus,
    deleteJobById
};

export default jobService;