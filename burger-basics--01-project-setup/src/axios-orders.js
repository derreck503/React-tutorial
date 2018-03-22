import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-b2a03.firebaseio.com/'
});

export default instance;