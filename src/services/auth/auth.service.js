import axios from "axios";

const API_URL = "https://joba-be.herokuapp.com/auth";

const signup = (email, password) => {
    return axios
        .post(API_URL + "/signup", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "/signin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const loginGoogle = (token) => {
    return axios
        .post(API_URL + "/google", { token })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const authService = {
    loginGoogle,
    signup,
    login,
    logout,
    getCurrentUser,
};

export default authService;