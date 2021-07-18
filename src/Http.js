import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
});

// const axiosInstance = "http://localhost:5000/animes"

export default axiosInstance;