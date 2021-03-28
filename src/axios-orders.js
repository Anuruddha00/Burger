import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-9f51e-default-rtdb.firebaseio.com/'
});

export default instance;