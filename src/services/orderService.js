import config from '../config/config';
import axios from 'axios';

export const fetchOrders = async () => {
  const response = await axios.get(`${config.baseUrl}/orders`);
  return response.data;
};
