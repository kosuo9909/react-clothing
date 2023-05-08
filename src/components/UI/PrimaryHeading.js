import { Fragment } from 'react';
import styles from './PrimaryHeading.module.css';
import { Link, NavLink } from 'react-router-dom';

const PrimaryHeading = () => {
  return (
    <Fragment>
      <section>
        <div className={styles.hero}>
          <div className={styles.primaryBox}>
            <h1 className={styles.headingPrimary}>
              Your Mobile Journey Begins Here.
            </h1>

            <p className={styles.headingDescription}>
              Get Your Thumb Workout: Endless Scrolling Awaits at Our Mobile
              Shop!
            </p>
            <Link to='/shop' className={styles.headingBtn}>
              Experience innovation
            </Link>
          </div>
          <div className={styles.heroImg}>
            <img
              className={styles.headingImg}
              src='https://i.imgur.com/oUOiyco.jpg'
              alt='A Fashionable woman'
            ></img>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PrimaryHeading;
