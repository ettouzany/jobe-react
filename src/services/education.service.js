import axios from "axios"
const API_URL = "https://joba-be.herokuapp.com/educations";
import authHeader from "./auth/auth-header";


const addEducation = (education) => {
    return axios.post(API_URL, education, { headers: authHeader() });
}

const updateEducation = (education) => {
    return axios.patch(API_URL+"/"+education.id, education, { headers: authHeader() });
}

const getEducations = ({start}) => {
    //add params ro axios get request
    const params = new URLSearchParams();
    if(start) params.append("start", start);
    return axios.get(API_URL+ "",{ headers: authHeader(),params });
}

const deleteEducation = (id) => {
    return axios.delete(API_URL+"/"+id, { headers: authHeader() });
}

const educationService = {
    getEducations,
    updateEducation,
    deleteEducation,
    addEducation
}

export default educationService;