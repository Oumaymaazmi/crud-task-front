import axios from "axios";

const BASE_URL = "http://localhost:8080/auth";

const authService = {
    login : (appUser) => axios.post(`${BASE_URL}/login`, appUser),
    register : (appUser) => axios.post(`${BASE_URL}/register`, appUser)
};

export default authService;
