import axios from 'axios';

const SubmitProfile = async (account) => {
  const response = await axios.post(
    'https://react-deployment-demo-510ac-default-rtdb.firebaseio.com/users.json',
    account
  );

  return response.data;
};

export default SubmitProfile;
