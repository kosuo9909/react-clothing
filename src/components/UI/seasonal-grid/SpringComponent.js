import RenderedItem from './RenderedItem';
import styles from './SpringComponent.module.css';

const SpringComponent = (props) => {
  console.log(props.items);
  return (
    <div className={styles.itemsGrid}>
      {props.items.map((item) => (
        <RenderedItem key={item.id} item={item}></RenderedItem>
      ))}
    </div>
  );
};

export default SpringComponent;
