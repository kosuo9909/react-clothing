import { useLoaderData } from 'react-router-dom';

import { Fragment } from 'react';
import SpringComponent from '../components/UI/seasonal-grid/SpringComponent';

const SeasonsWinterPage = () => {
  const items = useLoaderData();
  return (
    <Fragment>
      <SpringComponent items={Object.values(items)} />
    </Fragment>
  );
};

export default SeasonsWinterPage;

export async function loader() {
  const response = await fetch(
    'https://react-clothing-60832-default-rtdb.firebaseio.com/items.json?orderBy="season"&equalTo="winter"'
  );

  if (!response.ok) {
    throw new Error('An error occurred');
  } else {
    const resData = await response.json();
    return resData;
  }
}
