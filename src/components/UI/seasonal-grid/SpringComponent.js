import styles from './SpringComponent.module.css';

const SpringComponent = (props) => {
  console.log(props.items);
  return (
    <div className={styles.itemsGrid}>
      {props.items.map((item) => (
        <div className={styles.item}>
          <img className={styles.img} src={item.image} alt='test'></img>
          <div className={styles.itemDescription}>
            <h1 className={styles.itemHeading}>{item.name}</h1>
            <p className={styles.price}>${item.price}</p>
            {/* <p className={styles.description}>{item.description}</p> */}
          </div>
          <button className={styles.btn}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default SpringComponent;
