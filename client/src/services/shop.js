import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  withCredentials: true
});

export const listLootBoxes = () =>
  api.get('/lootBoxes').then(response => response.data);
