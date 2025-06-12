import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const getDashboardData = async (usuarioId) => {
  const res = await axios.get(`${API_URL}/dashboard/${usuarioId}`);
  return res.data;
};
