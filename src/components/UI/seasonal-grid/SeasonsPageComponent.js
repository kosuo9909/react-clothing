import { Fragment } from 'react';
import styles from './SeasonsPageComponent.module.css';
import { Link } from 'react-router-dom';

const SeasonsPageComponent = () => {
  return (
    <Fragment>
      <div className={styles.containerSeasons}>
        <div className={styles.season}>
          <p className={styles.seasonalParagraph}>spring</p>

          <Link to='spring'>
            <img
              className={styles.img}
              src={require('../../../images/seasons/spring.webp')}
              alt='Spring'
            ></img>
          </Link>
        </div>

        <div className={styles.season}>
          <p className={styles.seasonalParagraph}>summer</p>
          <Link to='summer'>
            <img
              className={styles.img}
              src={require('../../../images/seasons/summer.webp')}
              alt='Spring'
            ></img>
          </Link>
        </div>
        <div className={styles.season}>
          <p className={styles.seasonalParagraph}>autumn</p>
          <Link to='autumn'>
            <img
              className={styles.img}
              src={require('../../../images/seasons/autumn.webp')}
              alt='Spring'
            ></img>
          </Link>
        </div>
        <div className={styles.season}>
          <p className={styles.seasonalParagraph}>winter</p>
          <Link to='winter'>
            <img
              className={styles.img}
              src={require('../../../images/seasons/winter.webp')}
              alt='Spring'
            ></img>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SeasonsPageComponent;
