import { useQuery } from '@tanstack/react-query';
import styles from './Orders.module.css';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import FetchOrders from '../../api/fetchOrders';
import { Link } from 'react-router-dom';
import OrdersComponent from './OrdersComponent';

const Orders = () => {
  const userID = useSelector((state) => state.user.currentUserID);

  const fetchedOrders = useQuery(['orders', userID], () => FetchOrders(userID));
  console.log(fetchedOrders.data);
  return (
    <Fragment>
      <div className={styles.cont}>
        {fetchedOrders?.data && (
          <h1 className={styles.heading}>История на поръчките</h1>
        )}
        {/* <div className={styles.container}> */}
        {fetchedOrders?.data ? (
          Object.values(fetchedOrders.data).map((order) => (
            <OrdersComponent order={order} />
          ))
        ) : (
          // fetchedOrders.data.map((order) => <FetchOrders order={order} />)
          // <div className={styles.orders}>
          //   <div className={styles.orderNum}> Order Number: XXXX</div>
          //   <div className={styles.orderTotal}>Order Total: </div>
          // </div>
          <div className={styles.noOrdersGrp}>
            <div className={styles.noOrders}> Все още нямаш поръчки. </div>
            <Link to='/shop' className={styles.btn}>
              Пазарувай
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Orders;
