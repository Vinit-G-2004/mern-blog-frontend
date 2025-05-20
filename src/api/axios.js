import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Automatically pulled from Vercel env
  withCredentials: true, // Optional, if you're using cookies
});

export default API;
