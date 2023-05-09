import { Link, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase/firebase';

const Navigation = () => {
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.cart.itemsCount);
  const loginState = useSelector((state) => state.user.isLoggedIn);
  const logoutHandler = (e) => {
    e.preventDefault();
    auth.signOut();
    navigate('/');
  };

  return (
    <div className={styles.navBarWrapper}>
      <div className={styles.btnGroup}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={styles.icon}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
          />
        </svg>

        <Link className={styles.link} to='shop'>
          <span>Shop</span>
        </Link>
      </div>

      {loginState ? (
        <div className={styles.btnGroup}>
          <div className={styles.btnGroupDrop}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={styles.icon}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
              />
            </svg>

            <Link className={styles.linkDrop} to='#'>
              <span>Account</span>
              <div className={styles.dropDown}>
                <div className={styles.groupDrop}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className={styles.iconSmall}
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>

                  <Link className={styles.linkDrop} to='/profile'>
                    Profile
                  </Link>
                </div>
                <div className={styles.groupDrop}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className={styles.iconSmall}
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                    />
                  </svg>

                  <Link className={styles.linkDrop} to='/orders'>
                    Orders
                  </Link>
                </div>
                <div className={styles.groupDrop}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    className={styles.iconSmall}
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                    />
                  </svg>
                  <a
                    onClick={logoutHandler}
                    className={styles.linkDrop}
                    href='/'
                  >
                    Logout
                  </a>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        ''
      )}
      {!loginState ? (
        <div className={styles.btnGroupDrop}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={styles.icon}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
            />
          </svg>

          <Link className={styles.linkDrop} to='#'>
            <span>Account</span>
            <div className={styles.dropDown}>
              <div className={styles.groupDrop}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  className={styles.iconSmall}
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                  />
                </svg>

                <Link className={styles.link} to='login'>
                  <span>Login</span>
                </Link>
              </div>
              <div className={styles.groupDrop}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className={styles.iconSmall}
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 4.5v15m7.5-7.5h-15'
                  />
                </svg>

                <Link className={styles.link} to='register'>
                  <span>Register</span>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        ''
      )}
      <div className={styles.btnGroup}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={styles.icon}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
          />
        </svg>

        <Link className={styles.link} to='shop'>
          <span>About</span>
        </Link>
      </div>
      <div className={styles.btnGroup}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={styles.icon}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
          />
        </svg>
        {cartCount > 0 ? (
          <span className={styles.spanCartWarning}>{cartCount}</span>
        ) : (
          ''
        )}

        <Link className={styles.link} to='cart'>
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
