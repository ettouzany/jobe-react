import axios from "axios";
import authHeader from "./auth/auth-header";

const API_URL = "https://joba-be.herokuapp.com/applications";



//add a new application
const addApplication = (jobId) => {
    return axios.post(API_URL, {jobId:jobId}, { headers: authHeader() });
};

const getApplications = ({search,location,categorie,filters,start}) => {
    //add params ro axios get request
    const params = new URLSearchParams();
    if(search) params.append("search", search);
    if(location) params.append("location", location);
    if(categorie) params.append("categorie", categorie);
    if(filters) params.append("filters", filters);
    if(start) params.append("start", start);
    return axios.get(API_URL+ "",{ headers: authHeader(),params });
};

//get a application by id
const getApplicationById = (id) => {
    return axios.get(API_URL + "/" + id, { headers: authHeader() });
};

const getAllPublicApplications = () => {
    return axios.get(API_URL + "/public");
};

const getAllPrivateApplications = () => {
    return axios.get(API_URL + "/private", { headers: authHeader() });
};



const applicationService = {
    addApplication,
    getApplications,
    
    getAllPublicApplications,
    getAllPrivateApplications,
    getApplicationById
};

export default applicationService;