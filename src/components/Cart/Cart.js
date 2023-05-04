import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import styles from './Cart.module.css';
import { Fragment } from 'react';

const Cart = () => {
  const cartTotalSelector = useSelector((state) => state.cart.item);
  console.log(cartTotalSelector);

  const total = cartTotalSelector.reduce(function (accumulator, obj) {
    return accumulator + obj.price;
  }, 0);

  return (
    <Fragment>
      <div className={styles.mainCart}>
        <div className={styles.cart}>
          <h1>Your shopping cart</h1>
          {cartTotalSelector.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className={styles.orderDetails}>
          <p>Order details</p>
          <div className={styles.orderSummaryLine}>
            <span>Items Total: </span>
            <span>{total} лв. </span>
          </div>
          <div className={styles.orderSummaryLine}>
            <span>Shipping: </span>
            <span>4.00 лв. </span>
          </div>
        </div>
        {/* <p>
          el totale is <span className={styles.totalSpan}>{total} лв.</span>
        </p> */}
      </div>
    </Fragment>
  );
};

export default Cart;
