import { useSelector } from 'react-redux';
import styles from './CartOrderDetails.module.css';
import SubmitCart from '../../api/submitCart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from '../../firebase/firebase';

const CartOrderDetails = (props) => {
  const [submit, setSubmit] = useState('');
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const cartTotalSelector = useSelector((state) => state.cart.item);
  console.log(cartTotalSelector);
  const userEmail = useSelector((state) => state.user.currentUserEmail);
  const total = useSelector((state) => state.cart.total).toFixed(2);

  const submitHandler = () => {
    setSubmit(true);
  };

  useEffect(() => {
    if (submit === true) {
      axios
        .post(
          'https://react-deployment-demo-510ac-default-rtdb.firebaseio.com/t2est.json',
          {
            items: cartTotalSelector[0],
            user: userEmail,
          }
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      setSubmit(false);
    } else {
      console.log(userEmail + 'CURRENT FROM REDUX');
    }
  }, [submit, cartTotalSelector, userEmail]);

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
          <button onClick={submitHandler}>Submit</button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CartOrderDetails;
