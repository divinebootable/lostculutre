/* eslint-disable arrow-body-style */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '`https://eupatridae1.pythonanywhere.com/',
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization header with token to all requests
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers.Authorization = `token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
