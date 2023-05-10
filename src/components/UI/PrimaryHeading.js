import { Fragment } from 'react';
import styles from './PrimaryHeading.module.css';
import { Link, NavLink } from 'react-router-dom';

const PrimaryHeading = () => {
  return (
    <Fragment>
      <section className={styles.vh100}>
        <div className={styles.hero}>
          <div className={styles.primaryBox}>
            <h1 className={styles.headingPrimary}>
              Мобилното ти приключение започва тук.
            </h1>

            <p className={styles.headingDescription}>
              Тренировка за палеца: Безкрайно скролване от нашия мобилен
              магазин!
            </p>
            <Link to='/shop' className={styles.headingBtn}>
              Насладете се на иновациите{' '}
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
