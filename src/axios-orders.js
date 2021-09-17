import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://payroll-hrm-a0643-default-rtdb.firebaseio.com/'
})

export default instance;