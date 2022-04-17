import axios from "axios"
const API_URL = "https://joba.onrender.com/userskills";
import authHeader from "./auth/auth-header";


const addSkill = (skill) => {
    return axios.post(API_URL, skill, { headers: authHeader() });
}

const updateSkill = (skill) => {
    return axios.patch(API_URL+"/"+skill.id, skill, { headers: authHeader() });
}

const getSkills = ({start}) => {
    //add params ro axios get request
    const params = new URLSearchParams();
    if(start) params.append("start", start);
    return axios.get(API_URL+ "",{ headers: authHeader(),params });
}

const deleteSkill = (id) => {
    return axios.delete(API_URL+"/"+id, { headers: authHeader() });
}

const skillService = {
    getSkills,
    updateSkill,
    deleteSkill,
    addSkill
}

export default skillService;