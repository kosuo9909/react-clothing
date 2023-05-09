import { useLoaderData } from 'react-router-dom';
import { Fragment } from 'react';
import SpringComponent from '../components/UI/seasonal-grid/SpringComponent';

const ShopPage = () => {
  const items = useLoaderData();
  return (
    <Fragment>
      <SpringComponent items={Object.values(items)} />
    </Fragment>
  );
};

export default ShopPage;

export async function loader() {
  const response = await fetch(
    'https://react-clothing-60832-default-rtdb.firebaseio.com/items.json?'
  );

  if (!response.ok) {
    throw new Error('An error occurred');
  } else {
    const resData = await response.json();
    return resData;
  }
}
