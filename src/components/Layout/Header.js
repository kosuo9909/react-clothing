import styles from './Header.module.css';
import { Fragment } from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <NavLink to='/'>
          <img
            className={styles.img}
            src={require('../../images/logo.png')}
            alt='K&E Logo'
          ></img>
        </NavLink>
        <Navigation />
      </header>
    </Fragment>
  );
};

export default Header;
