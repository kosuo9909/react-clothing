import axios from 'axios';
// import { useSelector } from 'react-redux';

const SubmitCart = () => {
  console.log('liclk');
  // const currentCart = useSelector((state) => state.cart.items);
  axios
    .post(
      'https://react-deployment-demo-510ac-default-rtdb.firebaseio.com/t2est.json',
      { currentCart: 'test' }
    )
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  return null;
};

export default SubmitCart;
