import { useDispatch, useSelector } from 'react-redux';
import styles from './CartItemPriceDetails.module.css';
import {
  decrease_quantity,
  increase_quantity,
  remove_item,
} from '../../app/CartSlice';

const CartItemPriceDetails = (props) => {
  const dispatch = useDispatch();
  const increaseQuantity = (e) => {
    e.preventDefault();
    dispatch(increase_quantity({ id: props.id }));
  };

  const decreaseQuantity = (e) => {
    e.preventDefault();

    dispatch(decrease_quantity({ id: props.id }));
  };

  const removeItem = (e) => {
    e.preventDefault();
    dispatch(remove_item({ id: props.id }));
  };
  const count = useSelector((state) => state.cart.itemsCount);
  return (
    <div className={styles.cartPriceContainer}>
      <p className={styles.cartPrice}>
        {props.quantity} <span className={styles.spanX}>x</span> {props.price}{' '}
        лв.
      </p>
      <div className={styles.svgContainer}>
        <button onClick={decreaseQuantity} className={styles.quantityBtn}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className={styles.svg}
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M19.5 12h-15'
            />
          </svg>
        </button>

        <span>{props.quantity}</span>
        <button onClick={increaseQuantity} className={styles.quantityBtn}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className={styles.svg}
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M12 4.5v15m7.5-7.5h-15'
            />
          </svg>
        </button>
      </div>
      <button onClick={removeItem} className={styles.btn}>
        Премахни
      </button>
    </div>
  );
};

export default CartItemPriceDetails;
