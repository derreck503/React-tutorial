import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a01e7.firebaseio.com/'
});

export default instance;