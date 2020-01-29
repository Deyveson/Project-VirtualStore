import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/virtual-store/api/'
});

export default api;