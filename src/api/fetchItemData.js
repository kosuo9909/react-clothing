import axios from 'axios';

const FetchItem = async (itemId) => {
  const response = await axios.get(
    'https://react-clothing-60832-default-rtdb.firebaseio.com/items/' +
      itemId +
      '.json'
  );

  return response.data;
};

export default FetchItem;
