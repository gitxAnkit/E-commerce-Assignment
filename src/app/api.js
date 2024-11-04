import axios from "axios";

const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});
export default api;