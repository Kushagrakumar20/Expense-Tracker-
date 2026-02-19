import axios from "axios";

// Create axios instance with backend base URL from Vercel environment variable
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Optional: automatically attach token if present
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
