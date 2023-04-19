import axios from 'axios';

const headerConfigs = {
  'Content-Type': 'application/json',
};

export const Axios = axios.create({
  baseURL: 'https://143.198.206.156:3001',
  headers: headerConfigs,
});
