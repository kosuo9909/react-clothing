import { Link, useNavigate } from 'react-router-dom';
import styles from './MobileNavigation.module.css';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase/firebase';
import { useState } from 'react';

const MobileNavigation = () => {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState();
  const cartCount = useSelector((state) => state.cart.itemsCount);
  const loginState = useSelector((state) => state.user.isLoggedIn);
  const logoutHandler = (e) => {
    e.preventDefault();
    auth.signOut();
    navigate('/');
  };

  const hiddenHandler = () => {
    setHidden(true);
    console.log('sethidden true');
  };

  const showHiddenHandler = () => {
    setHidden(false);
    console.log('sethidden false');
  };

  return (
    <div>
      {!hidden && (
        <span onClick={hiddenHandler}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className={styles.hamburger}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </span>
      )}

      <div
        className={
          !hidden ? `${styles.navBarWrapperHidden}` : `${styles.navBarWrapper}`
        }
      >
        {hidden && (
          <span onClick={showHiddenHandler}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className={styles.hamburger}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </span>
        )}

        <nav className={styles.flexDiv}>
          <Link to='/shop' className={styles.link}>
            Пазарувай
          </Link>
          <Link to='/profile' className={styles.link}>
            Акаунт
          </Link>
          <Link to='/about' className={styles.link}>
            Относно
          </Link>
          <Link to='/cart' className={styles.link}>
            Количка
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;
