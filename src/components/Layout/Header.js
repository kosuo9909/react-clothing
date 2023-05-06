import styles from './Header.module.css';
import { Fragment, useEffect, useState } from 'react';
import Navigation from './Navigation';
import { Link, Outlet } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { useDispatch } from 'react-redux';
import {
  checkLoggedIn,
  currentUserEmailUpdate,
  currentUserIdUpdate,
} from '../../app/UserSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        dispatch(checkLoggedIn({ type: 'LoggedIn' }));
        dispatch(currentUserEmailUpdate({ email: user.email }));
        dispatch(currentUserIdUpdate({ id: user.uid }));
      } else {
        setIsLoggedIn(false);
        dispatch(currentUserEmailUpdate({ email: null }));
        dispatch(currentUserIdUpdate({ id: null }));

        dispatch(checkLoggedIn({ type: 'notLoggedIn' }));
      }
    });
  }, [dispatch]);

  return (
    <Fragment>
      <header className={styles.header}>
        <Link to='/'>
          <img
            className={styles.img}
            src={require('../../images/logo.png')}
            alt='K&E Logo'
          ></img>
        </Link>
        <Navigation />
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Header;
