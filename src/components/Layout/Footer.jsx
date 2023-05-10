import styles from './Footer.module.css';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.divEl}>
        Kostadin Stanev - All rights reserved &reg; 2023
      </div>
      <a href='https://github.com/kosuo9909' content='github link'>
        <div className={styles.divEl}>
          <img
            className={styles.icon}
            src='https://i.imgur.com/dFU5YmS.png'
            alt='social media icon'
          ></img>
        </div>
      </a>
      <a
        href='https://www.linkedin.com/in/kostadin-stanev-762160206'
        content='linkedin link'
      >
        <div className={styles.divEl}>
          <img
            className={styles.icon}
            src='https://i.imgur.com/dtmYS6U.png'
            alt='social media icon'
          ></img>
        </div>
      </a>

      <a
        href='https://www.facebook.com/profile.php?id=100000382536117'
        content='facebook link'
      >
        <div className={styles.divEl}>
          <img
            className={styles.icon}
            src='https://i.imgur.com/nZsTvbX.png'
            alt='social media icon'
          ></img>
        </div>
      </a>
    </div>
  );
};

export default Footer;
