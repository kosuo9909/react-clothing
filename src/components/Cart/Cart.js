import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import styles from './Cart.module.css';
import { Fragment } from 'react';
import CartOrderDetails from './CartOrderDetails';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartTotalSelector = useSelector((state) => state.cart.item);
  const itemsCount = useSelector((state) => state.cart.itemsCount);

  return (
    <Fragment>
      <div className={styles.mainCart}>
        <div className={styles.cart}>
          {itemsCount > 0 ? (
            <h1>Your shopping cart</h1>
          ) : (
            <div>
              <h1 className={styles.emptyCart}>Your shopping cart is empty</h1>
              <Link to='/seasons' className={styles.btn}>
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
