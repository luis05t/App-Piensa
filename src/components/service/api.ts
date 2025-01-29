import axios from 'axios';

const API_URL = 'http://tu-backend.com/api'; // Cambia esto por la URL real

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Endpoints
export const getUsers = () => api.get('/users');
export const getRoles = () => api.get('/roles');
export const getDevices = () => api.get('/devices');
export const getEvents = () => api.get('/events');
export const createUser = (data: any) => api.post('/users', data);
export const createDevice = (data: any) => api.post('/devices', data);
export const createEvent = (data: any) => api.post('/events', data);
