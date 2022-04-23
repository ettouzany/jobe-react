import axios from "axios";
import authHeader from "./auth/auth-header";

const API_URL = "http://localhost:3000";


const setIsCompanyAndStatus = (isCompany, status) => {
    return axios.post(API_URL + "/users/changeCompanyAndStatus", { isCompany, status }, { headers: authHeader() });
}
const getUserFullData = () => {
    return axios.get(API_URL + "/users/me", { headers: authHeader() });
};

const getUserFullDataById = (id) => {
    return axios.get(API_URL + "/users/" + id, { headers: authHeader() });
};
//update user
const updateUser = (user) => {
    const filedata = new FormData();
    filedata.append('photo', user.photo);
    filedata.append('first_name', user.first_name);
    filedata.append('last_name', user.last_name);
    filedata.append('email', user.email);
    filedata.append('phone', user.phone);
    filedata.append('description', user.description);
    filedata.append('city', user.city);
    filedata.append('country', user.country);
    filedata.append('title', user.title);
    filedata.append('username', user.username);
    return axios.patch(API_URL + "/users/user", filedata, { headers: authHeader() });
};

const UpdateCompany = (company) => {
    return axios.patch(API_URL + "/users/company" + company.id, company, { headers: authHeader() });
};

const updateCompanyNameImage = (user) => {
    const filedata = new FormData();
    filedata.append('photo', user.photo);
    filedata.append('companyname', user.companyname);
    filedata.append('industry', user.industry);
    return axios.patch(API_URL + "/users/companyname", filedata, { headers: authHeader() });
};

const updateUserNameImage = (user) => {
    const filedata = new FormData();
    filedata.append('photo', user.photo);
    filedata.append('first_name', user.first_name);
    filedata.append('last_name', user.last_name);
    filedata.append('industry', user.title);
    return axios.patch(API_URL + "/users/usertitle", filedata, { headers: authHeader() });
};
const userService = {
    updateUser,
    UpdateCompany,
    updateCompanyNameImage,
    updateUserNameImage,

    setIsCompanyAndStatus,
    getUserFullData,
    getUserFullDataById,


};

export default userService;