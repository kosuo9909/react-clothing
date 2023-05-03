import { useLoaderData } from 'react-router-dom';

import { Fragment } from 'react';
import SpringComponent from '../components/UI/seasonal-grid/SpringComponent';

const SeasonsSpringPage = () => {
  const items = useLoaderData();
  console.log(`${Object.values(items)}`);

  return (
    <Fragment>
      <SpringComponent items={Object.values(items)} />
    </Fragment>
  );
};

export default SeasonsSpringPage;

export async function loader() {
  const response = await fetch(
    'https://react-clothing-60832-default-rtdb.firebaseio.com/items.json?orderBy="season"&equalTo="spring"'
  );

  if (!response.ok) {
    throw new Error('An error occurred');
  } else {
    const resData = await response.json();
    return resData;
  }
}
