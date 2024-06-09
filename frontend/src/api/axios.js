// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api', // Replace with your API base URL
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
});

export default instance;
