import { useDispatch, useSelector } from 'react-redux';
import styles from './CartOrderDetails.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { clear_cart } from '../../app/CartSlice';
import { useQuery } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { database } from '../../firebase/firebase';
import { push, ref } from 'firebase/database';
import FetchProfile from '../../api/fetchProfile';

const CartOrderDetails = (props) => {
  const db = database;
  const dispatch = useDispatch();
  const taskRef = (db, 'orders/');

  const navigate = useNavigate();

  // const [submit, setSubmit] = useState(false);
  const hasProfile = useSelector((state) => state.user.hasProfile);
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const cartTotalSelector = useSelector((state) => state.cart.item);
  const userEmail = useSelector((state) => state.user.currentUserEmail);
  const userID = useSelector((state) => state.user.currentUserID);
  const total = useSelector((state) => state.cart.total).toFixed(2);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchedUsers = useQuery(['userData', userID], () =>
    FetchProfile(userID)
  );

  const submitHandler = () => {
    let orderId = Math.floor(
      Math.random() * (999999999 - 100000000 + 1) + 100000000
    );
    let date = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    // setSubmit(true);
    // postData.refetch();
    // setSubmit(false);
    if (!hasProfile) {
      navigate('/profile');
      return;
    }
    push(ref(db, 'orders/' + userID), {
      orderId: orderId,
      items: cartTotalSelector,
      email: userEmail,
      total: total,
      address: { ...fetchedUsers.data },
      date: date.toLocaleDateString('bg-BG', options),
    });
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
            <span>{(Number(total) + shippingCost).toFixed(2)} лв.</span>
          </div>
          {isLoggedIn ? (
            <button className={styles.btn} onClick={submitHandler}>
              {/* {postData.isLoading && postData.isFetching */}
              {isSubmitting ? 'Submitting order' : 'Submit order'}
            </button>
          ) : (
            <Link to='/login'>
              <button className={styles.btn} onClick={submitHandler}>
                Log into your account to submit
              </button>
            </Link>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CartOrderDetails;
