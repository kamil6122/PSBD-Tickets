import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAllTickets = async () =>
    axiosClient.get('/bilety').then((res) => res.data);

export const getSingleTicket = async (biletID) =>
    axiosClient.get(`/bilety/${biletID}`).then((res) => res.data);