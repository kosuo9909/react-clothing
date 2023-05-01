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
              Look good, feel even better.
            </h1>

            <p className={styles.headingDescription}>
              Discover your fashion sense with our wide selection of clothing
              and accessories, designed to elevate your wardrobe.
            </p>
            <Link to='/seasons' className={styles.headingBtn}>
              Start dressing well
            </Link>
          </div>
          <div className={styles.heroImg}>
            <img
              className={styles.headingImg}
              src={require('../../images/whereslugo-6QvRVC-6_Vo-unsplash.webp')}
              alt='A Fashionable woman'
            ></img>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PrimaryHeading;
