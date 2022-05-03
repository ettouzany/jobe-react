

//axios interceptor for token refresh
axios.interceptors.response.use(
    (response) => {
        return response;
    }
    ,
    (error) => {
        if (error.response.status === 401) {
            const refreshToken = getCurrentUser()?.refreshToken;
            if (refreshToken) {
                return axios
                    .post(API_URL + "/refresh", {
                        refreshToken: refreshToken,
                    })
                    .then((response) => {
                        if (response.data.token) {
                            localStorage.setItem("user", JSON.stringify(response.data));
                            return axios(error.config);
                        }
                        return Promise.reject(error);
                    });
            }
        }
        return Promise.reject(error);
    }
);
