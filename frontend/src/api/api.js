import axios, { AxiosRequestConfig } from 'axios';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';


const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
    // withCredentials: true,
});

// // Interceptors
// axiosClient.interceptors.response.use(
//     (response) => {
//         // response.data = convertDates(response.data);
//         return response;
//     },
//     (error) => {
//         return Promise.reject(error);
//     },
// );

export const getAllTickets = async () =>
    axiosClient.get('/bilety').then((res) => res.data);

export const getSingleTicket = async (biletID) =>
    axiosClient.get(`/bilety/${biletID}`).then((res) => res.data);