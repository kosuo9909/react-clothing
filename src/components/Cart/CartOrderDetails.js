import { useSelector, useDispatch } from 'react-redux';
import styles from './CartOrderDetails.module.css';
import { decrease_quantity, dummy_update } from '../../app/CartSlice';
import { useEffect } from 'react';

const CartOrderDetails = (props) => {
  const itemsCount = useSelector((state) => state.cart.itemsCount);

  const total = useSelector((state) => state.cart.total).toFixed(2);

  return (
    <div>
      {itemsCount > 0 ? (
        <div className={styles.orderDetails}>
          <p>Order details</p>
          <div className={styles.orderSummaryLine}>
            <span>Items Total: </span>
            <span>{total} лв. </span>
          </div>
          <div className={styles.orderSummaryLine}>
            <span>Shipping: </span>
            <span>{total < 50 ? ' 4.00  лв.' : 'FREE'} </span>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CartOrderDetails;
