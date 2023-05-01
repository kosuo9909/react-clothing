import styles from './Header.module.css';
import { Fragment } from 'react';
import Navigation from './Navigation';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
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
