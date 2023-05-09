import styles from './Orders.module.css';
import { Fragment } from 'react';

const Orders = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.orders}>
          <div className={styles.orderNum}> Order Number: XXXX</div>
          <div className={styles.orderTotal}>Order Total: </div>
        </div>
        <div className={styles.orderDetails}>More details</div>
      </div>
    </Fragment>
  );
};

export default Orders;
