import styles from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <div key={props.item.id} className={styles.cartMainDiv}>
      <div className={styles.gridDiv}>
        <img className={styles.cartImg} src={props.item.image} alt='alo'></img>
        {/* <div className={styles.cartNamePrice}> */}
        <p className={styles.cartName}>{props.item.item}</p>
        <p className={styles.cartPrice}>{props.item.price} лв.</p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CartItem;
