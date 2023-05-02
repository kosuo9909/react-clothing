import { Fragment } from 'react';
import SeasonRenderedItem from './SeasonRenderedItem';
import styles from './SpringComponent.module.css';

const SpringComponent = (props) => {
  console.log(props.items);
  return (
    <div className={styles.itemsGrid}>
      {props.items.map((item) => (
        <div className={styles.item}>
          <h1>{item.name}</h1>
          <img className={styles.img} src={item.image} alt='test'></img>
          <p>{item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SpringComponent;
