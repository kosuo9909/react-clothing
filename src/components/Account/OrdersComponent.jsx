import { Fragment } from 'react';
import styles from './OrdersComponent.module.css';

const OrdersComponent = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.orders}>
        <div className={styles.orderNum}>
          {' '}
          <span className={styles.orderSpan}>Order Number:</span>{' '}
          {props.order.orderId}
        </div>
        <div className={styles.orderTotal}>
          <span className={styles.orderSpan}>Order Total:</span>{' '}
          {props.order.total} лв.
        </div>
        <div className={styles.orderTotal}>
          {' '}
          <span className={styles.orderSpan}>Order Date:</span>{' '}
          {props.order.date}
        </div>
        <div className={styles.itemsGrid}>
          {Object.values(props.order.items).map((item) => (
            <div className={styles.grid}>
              <img
                className={styles.orderImg}
                src={item.image}
                alt='a beautiful item'
              ></img>
              <div className={styles.itemDesc}>
                <span>{item.item}</span>
                <span>{item.price} лв. / бр.</span>
                <span>Quantity - {item.quantity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className={styles.orderDetails}>More details</div> */}
    </div>
  );
};

export default OrdersComponent;
