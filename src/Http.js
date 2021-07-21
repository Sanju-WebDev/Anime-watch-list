import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
});

axiosInstance.interceptors.request.use( req => {
    if(localStorage.getItem('token')) req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    return req
})

// const axiosInstance = "http://localhost:5000/animes"

export default axiosInstance;