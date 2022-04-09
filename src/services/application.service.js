import axios from "axios";
import authHeader from "./auth/auth-header";

const API_URL = "https://joba-be.herokuapp.com/applications";



//add a new application
const addApplication = (jobId) => {
    return axios.post(API_URL, {jobId:jobId}, { headers: authHeader() });
};

const getApplications = ({start}) => {
    //add params ro axios get request
    const params = new URLSearchParams();
    if(start) params.append("start", start);
    return axios.get(API_URL+ "",{ headers: authHeader(),params });
};

const getJobsApplications = ({start}) => {
    //add params ro axios get request
    const params = new URLSearchParams();
    if(start) params.append("start", start);
    return axios.get(API_URL+ "/jobCreator",{ headers: authHeader(),params });
};

//get a application by id
const getApplicationById = (id) => {
    return axios.get(API_URL + "/" + id, { headers: authHeader() });
};




const applicationService = {
    addApplication,
    getApplications,
    getJobsApplications,
    getApplicationById
};

export default applicationService;