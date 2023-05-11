import RenderedItem from './RenderedItem';
import styles from './SpringComponent.module.css';

const SpringComponent = (props) => {
  console.log(props);
  return (
    <div className={styles.itemsGrid}>
      {props.items.map((item, key) => (
        <RenderedItem key={item.id} id={key} item={item}></RenderedItem>
      ))}
    </div>
  );
};

export default SpringComponent;
