import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import styles from './Cart.module.css';
import { Fragment } from 'react';
import CartOrderDetails from './CartOrderDetails';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import FetchProfile from '../../api/fetchProfile';
import { hasProfileUpdate } from '../../app/UserSlice';

const Cart = () => {
  const cartTotalSelector = useSelector((state) => state.cart.item);
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.user.currentUserID);
  const hasProfile = useSelector((state) => state.user.hasProfile);

  const fetchedUsers = useQuery(['userData', userID], () =>
    FetchProfile(userID)
  );

  if (
    fetchedUsers?.data?.name?.length > 0 &&
    fetchedUsers?.data?.phone?.length > 0 &&
    fetchedUsers?.data?.address?.length > 0
  ) {
    dispatch(hasProfileUpdate({ type: true }));
  } else {
    dispatch(hasProfileUpdate({ type: false }));
  }

  return (
    <Fragment>
      <div className={styles.mainCart}>
        <div className={styles.cart}>
          {itemsCount > 0 ? (
            <h1>Your shopping cart</h1>
          ) : (
            <div>
              <h1 className={styles.emptyCart}>Your shopping cart is empty</h1>
              <Link to='/shop' className={styles.btn}>
                Shop now
              </Link>
            </div>
          )}
          {cartTotalSelector.map((item) => (
            <div key={item.id}>
              <CartItem item={item} />
            </div>
          ))}
        </div>

        {itemsCount > 0 && <CartOrderDetails />}
      </div>
    </Fragment>
  );
};

export default Cart;
