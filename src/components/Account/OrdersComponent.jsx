import styles from './OrdersComponent.module.css';

const OrdersComponent = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.orders}>
        <div className={styles.orderTopPart}>
          <div className={styles.ordersLeft}>
            <div className={styles.orderNum}>
              <span className={styles.orderSpan}>
                Номер на поръчка &#8212;{' '}
              </span>{' '}
              {props.order.orderId}
            </div>
            <div className={styles.orderTotal}>
              <span className={styles.orderSpan}>Обща сума &#8212; </span>{' '}
              {props.order.total} лв.
            </div>
            <div className={styles.orderTotal}>
              {' '}
              <span className={styles.orderSpan}>
                Дата на поръчка &#8212;{' '}
              </span>{' '}
              {props.order.date}
            </div>
          </div>
          <div className={styles.ordersRight}>
            <div className={styles.addressDetails}>
              <svg
                fill='currentColor'
                viewBox='0 0 16 16'
                className={styles.addressIcons}
              >
                <path d='M6 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
                <path
                  fillRule='evenodd'
                  d='M15.854 5.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L12.5 7.793l2.646-2.647a.5.5 0 01.708 0z'
                />
              </svg>
              <span>&#8212;</span>

              {props.order.address.name}
            </div>
            <div className={styles.addressDetails}>
              <svg
                fill='currentColor'
                viewBox='0 0 16 16'
                height='1em'
                width='1em'
                className={styles.addressIcons}
              >
                <path d='M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
              </svg>
              <span>&#8212;</span>

              {props.order.address.phone}
            </div>
            <div className={styles.addressDetails}>
              <svg
                viewBox='0 0 512 512'
                fill='currentColor'
                height='1em'
                width='1em'
                className={styles.addressIcons}
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={32}
                  d='M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z'
                />
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={32}
                  d='M304 192 A48 48 0 0 1 256 240 A48 48 0 0 1 208 192 A48 48 0 0 1 304 192 z'
                />
              </svg>
              <span>&#8212;</span>
              {props.order.address.address}
            </div>
          </div>
        </div>
        <div className={styles.itemsGrid}>
          {Object.values(props.order.items).map((item) => (
            <div className={styles.grid}>
              <img
                className={styles.orderImg}
                src={item.image}
                alt='a beautiful item'
              ></img>
              <div className={styles.itemDesc}>
                <span>{item.item}</span>
                <span>{item.price} лв. / бр.</span>
                <span>Количество - {item.quantity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersComponent;
