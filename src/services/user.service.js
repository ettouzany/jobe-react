import axios from "axios";
import authHeader from "./auth/auth-header";

const API_URL = "https://joba-be.herokuapp.com";


const setIsCompanyAndStatus = (isCompany, status) => {
    return axios.post(API_URL + "/users/changeCompanyAndStatus", { isCompany, status }, { headers: authHeader() });
}
const getUserFullData = () => {
    return axios.get(API_URL + "/users/me", { headers: authHeader() });
};
const userService = {
    setIsCompanyAndStatus,
    getUserFullData,
};

export default userService;