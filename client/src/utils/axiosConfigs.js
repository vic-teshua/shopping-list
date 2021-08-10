import axios from 'axios';

const axiosApiInstance = axios.create();

axiosApiInstance.defaults.baseURL = 'https://backend-shopping-list.herokuapp.com';
axiosApiInstance.defaults.headers.post['Content-Type'] = 'application/json';

export default axiosApiInstance;
