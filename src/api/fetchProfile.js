import axios from 'axios';

const FetchProfile = async (userId) => {
  const response = await axios.get(
    'https://react-clothing-60832-default-rtdb.firebaseio.com/users/' +
      userId +
      '.json'
  );

  return response.data;
};

export default FetchProfile;
