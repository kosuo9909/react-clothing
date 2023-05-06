import { useDispatch, useSelector } from 'react-redux';
import styles from './CartOrderDetails.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { clear_cart } from '../../app/CartSlice';

const CartOrderDetails = (props) => {
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState('');
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const cartTotalSelector = useSelector((state) => state.cart.item);
  const userEmail = useSelector((state) => state.user.currentUserEmail);
  const userID = useSelector((state) => state.user.currentUserID);
  const total = useSelector((state) => state.cart.total).toFixed(2);

  const submitHandler = () => {
    setSubmit(true);
    dispatch(clear_cart());
  };

  const [shippingCost, setShippingCost] = useState(7);

  useEffect(() => {
    if (total > 50) {
      setShippingCost(0);
    } else {
      setShippingCost(7);
    }
  }, [total]);

  useEffect(() => {
    if (submit === true) {
      axios
        .post(
          'https://react-deployment-demo-510ac-default-rtdb.firebaseio.com/' +
            userID +
            '.json',
          {
            items: cartTotalSelector,
            userEmail,
            total: total,
          }
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      setSubmit(false);
    } else {
    }
  }, [submit, cartTotalSelector, userEmail, userID, total, dispatch]);

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
            <span>
              {total < 50 ? <span>{shippingCost.toFixed(2)} лв.</span> : 'FREE'}{' '}
            </span>
          </div>
          <div className={styles.orderSummaryLine}>
            <span>Order Total: </span>
            <span>{Number(total) + shippingCost} лв.</span>
          </div>
          <button className={styles.btn} onClick={submitHandler}>
            Submit order
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CartOrderDetails;
