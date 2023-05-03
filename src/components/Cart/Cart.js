import { useDispatch, useSelector } from 'react-redux';
import { add_item } from '../../app/CartSlice';

const Cart = () => {
  const cartTotal = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const increaseTotal = () => {
    dispatch(add_item());
  };

  return (
    <h1>
      Cart {cartTotal}
      <button onClick={increaseTotal}>CLICK ME</button>
    </h1>
  );
};

export default Cart;
