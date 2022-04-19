import axios from "axios";
import authHeader from "./auth/auth-header";

const API_URL = "http://localhost:3000/notifications";


const getnotifications = ({ search, filters, limit, page }) => {
    //add params ro axios get request
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (filters) params.append("filters", filters);
    if (limit) params.append("limit", limit);
    if (page) params.append("page", page);

    return axios.get(API_URL + "", { headers: authHeader(), params });
};





const notificationService = {
    getnotifications,

};

export default notificationService;