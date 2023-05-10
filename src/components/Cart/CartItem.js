import { useDispatch } from 'react-redux';
import styles from './CartItem.module.css';
import CartItemPriceDetails from './CartItemPriceDetails';

const CartItem = (props) => {
  return (
    <div>
      {props.item ? (
        <div key={props.item.id} className={styles.cartMainDiv}>
          <div className={styles.gridDiv}>
            <img
              className={styles.cartImg}
              src={props.item.image}
              alt='alo'
            ></img>
            <div className={styles.right}>
              <p className={styles.cartName}>{props.item.item}</p>
              {/* <p className={styles.cartName}>{props.item.description}</p> */}
            </div>
            <CartItemPriceDetails
              quantity={props.item.quantity}
              price={props.item.price}
              id={props.item.id}
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default CartItem;
