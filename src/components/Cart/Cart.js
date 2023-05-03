import { useDispatch, useSelector } from 'react-redux';
import { add_item } from '../../app/CartSlice';

const Cart = () => {
  const cartTotal = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();

  const increaseTotal = () => {
    dispatch(add_item({ item: 'KKK' }));
  };

  return (
    <h1>
      cart {cartTotal} <button onClick={increaseTotal}>ww</button>
    </h1>
  );
};

export default Cart;
