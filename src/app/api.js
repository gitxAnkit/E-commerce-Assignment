import axios from "axios";

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout: 10000,
});

export default api;
