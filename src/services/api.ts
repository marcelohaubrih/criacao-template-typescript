import axios from 'axios';

const api = axios.create({
  baseURL: ``, // example: https://api.github.com
});

export default api;
