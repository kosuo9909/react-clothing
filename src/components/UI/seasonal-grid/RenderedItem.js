import { Fragment } from 'react';
import styles from './SpringComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { add_item } from '../../../app/CartSlice';

const RenderedItem = (props) => {
  const dispatch = useDispatch();
  const item2 = useSelector((state) => state.cart.item);

  const addToCartHandler = (e) => {
    e.preventDefault();

    dispatch(
      add_item({
        item: {
          item: props.item.name,
          price: props.item.price,
          image: props.item.image,
        },
      })
    );
  };
  return (
    <Fragment>
      <div className={styles.item}>
        <img className={styles.img} src={props.item.image} alt='test'></img>
        <div className={styles.itemDescription}>
          <h1 className={styles.itemHeading}>{props.item.name}</h1>
          <p className={styles.price}>${props.item.price}</p>
        </div>
        <button onClick={addToCartHandler} className={styles.btn}>
          Add to cart
        </button>
      </div>
    </Fragment>
  );
};

export default RenderedItem;
