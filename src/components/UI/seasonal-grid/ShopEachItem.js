import { Fragment } from 'react';
import styles from './ShopEachItem.module.css';
import { useParams } from 'react-router-dom';

const ShopEachItem = (props) => {
  let { itemId } = useParams();
  let test = useParams();
  console.log(test);
  return (
    <div className={styles.vh100}>
      <div className={styles.grid}>
        <img
          className={styles.img}
          src={props.item.image}
          alt='the phone you picked'
        ></img>

        <div className={styles.details}>
          <div className={styles.line}>
            <svg
              fill='currentColor'
              viewBox='0 0 16 16'
              // height='1em'
              // width='1em'
              className={styles.icon}
            >
              <path d='M11 1a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V2a1 1 0 011-1h6zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z' />
              <path d='M8 14a1 1 0 100-2 1 1 0 000 2z' />
            </svg>
            <span>
              <span className={styles.lightGrey}>Смартфон</span> &#8212;{' '}
              {props.item.name}
            </span>
          </div>
          <div className={styles.line}>
            <svg
              viewBox='0 0 24 24'
              fill='currentColor'
              // height='1em'
              // width='1em'
              className={styles.icon}
            >
              <path d='M19 11.5s-2 2.17-2 3.5a2 2 0 002 2 2 2 0 002-2c0-1.33-2-3.5-2-3.5M5.21 10L10 5.21 14.79 10m1.77-1.06L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.56-.59 1.53 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.59.59-1.56 0-2.12z' />
            </svg>
            <span>
              <span className={styles.lightGrey}>Цвят </span>&#8212;{' '}
              {props.item.color}
            </span>
          </div>
          <div className={styles.line}>
            <svg
              viewBox='0 0 792 1000'
              fill='currentColor'
              // height='1em'
              // width='1em'
              className={styles.iconSpec}
            >
              <path d='M476 104h316v316L692 296 546 448 446 348l152-146-122-98M246 548l100 100-152 146 122 100H0V578l100 122 146-152' />
            </svg>
            <span>
              <span className={styles.lightGrey}>Размер екран</span> &#8212;{' '}
              {props.item.display_size}
            </span>
          </div>
          <div className={styles.line}>
            <svg
              fill='none'
              viewBox='0 0 15 15'
              // height='1em'
              // width='1em'
              className={styles.icon}
            >
              <path
                fill='currentColor'
                d='M1.5 0A1.5 1.5 0 000 1.5v8A1.5 1.5 0 001.5 11H7v3H2v1h11v-1H8v-3h5.5A1.5 1.5 0 0015 9.5v-8A1.5 1.5 0 0013.5 0h-12z'
              />
            </svg>
            <span>
              <span className={styles.lightGrey}>Тип екран</span> &#8212;{' '}
              {props.item.display_type}
            </span>
          </div>
          <div className={styles.line}>
            <svg
              viewBox='0 0 512 512'
              fill='currentColor'
              // height='1em'
              // width='1em'
              className={styles.icon}
            >
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={32}
                d='M435.25 48h-122.9a14.46 14.46 0 00-10.2 4.2L56.45 297.9a28.85 28.85 0 000 40.7l117 117a28.85 28.85 0 0040.7 0L459.75 210a14.46 14.46 0 004.2-10.2v-123a28.66 28.66 0 00-28.7-28.8z'
              />
              <path d='M384 160a32 32 0 1132-32 32 32 0 01-32 32z' />
            </svg>
            <span>
              <span className={styles.lightGrey}>Цена</span> &#8212;{' '}
              {props.item.price} лв.
            </span>
          </div>
          <div className={styles.line}>
            <svg
              viewBox='0 0 21 21'
              fill='currentColor'
              // height='1em'
              // width='1em'
              className={styles.icon}
            >
              <g fill='none' fillRule='evenodd'>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 2.5h12a2 2 0 012 2v11.99a2 2 0 01-2 2h-12a2 2 0 01-2-2V4.5a2 2 0 012-2zM2.659 6.5H18.5'
                />
                <g fill='currentColor'>
                  <path d='M6.816 13.155v-1.079h.88c.668 0 1.122-.395 1.122-.972 0-.527-.415-.927-1.103-.927-.713 0-1.152.366-1.201.996H5.15C5.201 9.874 6.201 9 7.788 9c1.563 0 2.432.864 2.427 1.895-.005.854-.542 1.416-1.299 1.601v.093c.981.141 1.577.766 1.577 1.709 0 1.235-1.162 2.11-2.754 2.11S5.063 15.537 5 14.204h1.411c.044.596.552.977 1.309.977.747 0 1.27-.406 1.27-1.016 0-.625-.489-1.01-1.28-1.01zM13.516 16.227v-5.611h-.087L11.7 11.808v-1.372l1.821-1.255h1.47v7.046z' />
                </g>
              </g>
            </svg>
            <span>
              <span className={styles.lightGrey}> Година на производство</span>{' '}
              &#8212; {props.item.production_year}
            </span>
          </div>
          <div className={styles.line}>
            <svg
              fill='none'
              viewBox='0 0 24 24'
              // height='1em'
              // width='1em'
              className={styles.icon}
            >
              <path
                fill='currentColor'
                d='M5 4a1 1 0 11-2 0 1 1 0 012 0zM9 4a1 1 0 11-2 0 1 1 0 012 0zM12 5a1 1 0 100-2 1 1 0 000 2zM17 4a1 1 0 11-2 0 1 1 0 012 0zM20 5a1 1 0 100-2 1 1 0 000 2zM5 20a1 1 0 11-2 0 1 1 0 012 0zM9 20a1 1 0 11-2 0 1 1 0 012 0zM12 21a1 1 0 100-2 1 1 0 000 2zM17 20a1 1 0 11-2 0 1 1 0 012 0zM20 21a1 1 0 100-2 1 1 0 000 2zM5 12a1 1 0 100-2 1 1 0 000 2zM20 13a1 1 0 11-2 0 1 1 0 012 0z'
              />
              <path
                fill='currentColor'
                fillRule='evenodd'
                d='M0 9a3 3 0 013-3h18a3 3 0 013 3v6a3 3 0 01-3 3H3a3 3 0 01-3-3V9zm3-1h18a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1z'
                clipRule='evenodd'
              />
            </svg>
            <span>
              <span className={styles.lightGrey}>RAM памет</span> &#8212;{' '}
              {props.item.ram}
            </span>
          </div>

          <div className={styles.line}>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              viewBox='0 0 24 24'
              // height='1em'
              // width='1em'
              className={styles.icon}
            >
              <path d='M22 12H2M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11zM6 16h.01M10 16h.01' />
            </svg>
            <span>
              <span className={styles.lightGrey}>Съхранение</span> &#8212;{' '}
              {props.item.storage}
            </span>
          </div>

          <div className={styles.line}>
            <svg
              fill='currentColor'
              viewBox='0 0 16 16'
              // height='1em'
              // width='1em'
              className={styles.icon}
            >
              <path d='M8 1a1 1 0 011-1h6a1 1 0 011 1v14a1 1 0 01-1 1H9a1 1 0 01-1-1V1zm1 13.5a.5.5 0 101 0 .5.5 0 00-1 0zm2 0a.5.5 0 101 0 .5.5 0 00-1 0zM9.5 1a.5.5 0 000 1h5a.5.5 0 000-1h-5zM9 3.5a.5.5 0 00.5.5h5a.5.5 0 000-1h-5a.5.5 0 00-.5.5zM1.5 2A1.5 1.5 0 000 3.5v7A1.5 1.5 0 001.5 12H6v2h-.5a.5.5 0 000 1H7v-4H1.5a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5H7V2H1.5z' />
            </svg>
            <span>
              <span className={styles.lightGrey}> Операционна система </span>{' '}
              &#8212;
              {props.item.operating_system}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopEachItem;
