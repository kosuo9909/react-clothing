import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <NavLink to='/seasons' className={styles.link}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink href='#' className={styles.link}>
            Account
          </NavLink>
        </li>
        <li>
          <NavLink href='#' className={styles.link}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink href='#' className={styles.link}>
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
