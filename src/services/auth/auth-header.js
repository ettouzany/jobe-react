import jwt_decode from "jwt-decode";
import authService from "./auth.service";

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.token) {
        const decoded = jwt_decode(user.token);
        if (decoded.exp < Date.now() / 1000) {
            authService.refreshToken();
        }

        return { Authorization: 'Bearer ' + user.token };
        // return { "x-auth-token": user.accessToken };
    } else {
        return {};
    }
}