import { Link, useNavigate } from 'react-router-dom';
import styles from './MobileNavigation.module.css';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase/firebase';
import { useState } from 'react';

const MobileNavigation = () => {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState();
  const [drop, setDrop] = useState(false);
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

  const showHiddenHandler = (e) => {
    setHidden(false);
    console.log('sethidden false');
  };

  const showDropHandler = (e) => {
    setDrop(!drop);
    console.log(drop);
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
        onClick={(e) => {
          if (e.target.tagName === 'DIV') {
            setHidden(false);
          }
        }}
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
          <span onClick={showDropHandler} className={styles.linkDrop}>
            Акаунт{' '}
            {drop ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className={styles.arrow}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className={styles.arrow}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                />
              </svg>
            )}
            {!drop && (
              <div className={styles.dropContent}>
                {!loginState && (
                  <>
                    <Link to='/login' className={styles.link}>
                      Login
                    </Link>
                    <Link to='/register' className={styles.link}>
                      Register
                    </Link>
                  </>
                )}
                {loginState && (
                  <>
                    <Link to='/profile' className={styles.link}>
                      Profile
                    </Link>
                    <Link onClick={logoutHandler} className={styles.link}>
                      Logout
                    </Link>
                  </>
                )}
              </div>
            )}
          </span>
          <Link className={styles.link}>Относно</Link>
          <Link to='/cart' className={styles.link}>
            Количка
            <span className={styles.spanCartWarning}>{cartCount}</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;
