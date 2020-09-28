import axios from 'axios';

const api = axios.create({
    baseURL: 'https://find-components-backend.herokuapp.com/'
})

export default api;