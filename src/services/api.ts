import axios from 'axios';

const ApiConnection = axios.create({
  baseURL: 'https://randomuser.me/api',
});

export default ApiConnection;
