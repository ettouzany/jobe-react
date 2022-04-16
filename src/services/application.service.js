import axios from "axios";
import authHeader from "./auth/auth-header";

const API_URL = "https://joba-be.herokuapp.com/applications";



//add a new application
const addApplication = (jobId,letter) => {
    return axios.post(API_URL, {jobId:jobId,letter}, { headers: authHeader() });
};

const getApplications = ({search,location,categorie,filters,limit,page,status}) => {
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