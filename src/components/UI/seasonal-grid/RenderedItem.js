import { Fragment, useEffect } from 'react';
import styles from './SpringComponent.module.css';
import { useDispatch } from 'react-redux';
import { add_item } from '../../../app/CartSlice';
import { Link } from 'react-router-dom';

const RenderedItem = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCartHandler = (e) => {
    e.preventDefault();

    dispatch(
      add_item({
        item: {
          id: props.id,
          item: props.item.name,
          price: props.item.price,
          image: props.item.image,
          description: props.item.description,
          production_year: props.item.production_year,
          display_type: props.item.display_type,
          display_size: props.item.display_size,
          operating_system: props.item.operating_system,
          ram: props.item.ram,
          storage: props.item.storage,
        },
      })
    );
  };
  return (
    <Fragment>
      <div className={styles.item}>
        <Link to={`/shop/${props.id}`}>
          <img className={styles.img} src={props.item.image} alt='test'></img>
        </Link>
        <div className={styles.itemDescription}>
          <h1 className={styles.itemHeading}>{props.item.name}</h1>
          <p className={styles.price}>{props.item.price} лв.</p>
        </div>
        <div className={styles.btnFlex}>
          <button onClick={addToCartHandler} className={styles.btn}>
            Добави
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default RenderedItem;
