import axios from 'axios';

// AXIOS CONSTANTS
const CONTENT_TYPE_HEADER = 'Content-Type';
const CONTENT_TYPE = 'application/json;charset=UTF-8';

// SET Default Content Type
const client = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    [CONTENT_TYPE_HEADER]: CONTENT_TYPE,
  }
});

export default client;