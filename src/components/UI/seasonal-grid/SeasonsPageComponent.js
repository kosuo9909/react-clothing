import { Fragment } from 'react';
import styles from './SeasonsPageComponent.module.css';

const SeasonsPageComponent = () => {
  return (
    <Fragment>
      <div className={styles.containerSeasons}>
        <div className={styles.season}>
          <p className={styles.seasonalParagraph}>spring</p>
          <img
            class={styles.img}
            src={require('../../../images/seasons/spring.webp')}
            alt='Spring'
          ></img>
        </div>

        <div className={styles.season}>
          <p className={styles.seasonalParagraph}>summer</p>
          <img
            class={styles.img}
            src={require('../../../images/seasons/summer.webp')}
            alt='Spring'
          ></img>
        </div>
        <div className={styles.season}>
          <p className={styles.seasonalParagraph}>autumn</p>
          <img
            class={styles.img}
            src={require('../../../images/seasons/autumn.webp')}
            alt='Spring'
          ></img>
        </div>
        <div className={styles.season}>
          <p className={styles.seasonalParagraph}>winter</p>
          <img
            class={styles.img}
            src={require('../../../images/seasons/winter.webp')}
            alt='Spring'
          ></img>
        </div>
      </div>
    </Fragment>
  );
};

export default SeasonsPageComponent;
