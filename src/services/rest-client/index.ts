import axios from 'axios';
import Config from 'react-native-config';

const headerConfigs = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export const Axios = axios.create({
  baseURL: 'http://143.198.206.156:3001/',
  headers: headerConfigs,
});
