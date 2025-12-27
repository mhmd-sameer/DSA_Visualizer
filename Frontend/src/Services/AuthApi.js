import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    //baseURL : "http://localhost:8080",
});

export const loginUser = (data) =>
    API.post("/api/auth/login", data);

export const signupUser = (data) =>
    API.post("/api/auth/signup", data);
