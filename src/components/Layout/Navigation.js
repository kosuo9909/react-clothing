import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <Link to='/seasons' className={styles.link}>
            Shop
          </Link>
        </li>
        <li>
          <Link to='/' className={styles.link}>
            Account
          </Link>
        </li>
        <li>
          <Link to='/' className={styles.link}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to='/' className={styles.link}>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
