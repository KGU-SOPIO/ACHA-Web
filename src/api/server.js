import axios from "axios";

export const server = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

server.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);
