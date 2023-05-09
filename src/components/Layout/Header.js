import styles from './Header.module.css';
import { Fragment, useEffect, useState } from 'react';
import Navigation from './Navigation';
import { Link, Outlet } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
  checkLoggedIn,
  currentUserEmailUpdate,
  currentUserIdUpdate,
  hasProfileUpdate,
} from '../../app/UserSlice';
import Footer from './Footer';
import FetchProfile from '../../api/fetchProfile';
import { useQuery } from '@tanstack/react-query';

const Header = (props) => {
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.user.currentUserID);
  const hasProfile = useSelector((state) => state.user.hasProfile);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // console.log('HEYYYY');
        // console.log(user);
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

  const fetchedUsers = useQuery(['userData', userID], () =>
    FetchProfile(userID)
  );

  if (
    fetchedUsers?.data?.name?.length > 0 &&
    fetchedUsers?.data?.phone?.length > 0 &&
    fetchedUsers?.data?.address?.length > 0
  ) {
    dispatch(hasProfileUpdate({ type: true }));
  } else {
    dispatch(hasProfileUpdate({ type: false }));
  }

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
      <Footer />
    </Fragment>
  );
};

export default Header;
