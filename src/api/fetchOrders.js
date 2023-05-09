import axios from 'axios';

const FetchOrders = async (userId) => {
  const response = await axios.get(
    'https://react-clothing-60832-default-rtdb.firebaseio.com/orders/' +
      userId +
      '.json'
  );

  return response.data;
};

export default FetchOrders;
