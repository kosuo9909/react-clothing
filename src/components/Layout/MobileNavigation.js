import { Link, useNavigate } from 'react-router-dom';
import styles from './MobileNavigation.module.css';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase/firebase';

const MobileNavigation = () => {
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.cart.itemsCount);
  const loginState = useSelector((state) => state.user.isLoggedIn);
  const logoutHandler = (e) => {
    e.preventDefault();
    auth.signOut();
    navigate('/');
  };

  return (
    <div>
      <div className={styles.navBarWrapper}>
        <nav className={styles.flexDiv}>
          <Link className={styles.link}>Пазарувай</Link>
          <Link className={styles.link}>Акаунт</Link>
          <Link className={styles.link}>Относно</Link>
          <Link className={styles.link}>Количка</Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;
