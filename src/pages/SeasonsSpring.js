import { useLoaderData } from 'react-router-dom';

import { Fragment } from 'react';
import SpringComponent from '../components/UI/seasonal-grid/SpringComponent';

const SeasonsSpringPage = () => {
  const items = useLoaderData();
  return (
    <Fragment>
      <SpringComponent items={items} />
    </Fragment>
  );
};

export default SeasonsSpringPage;

export async function loader() {
  const response = await fetch('http://127.0.0.1:8000/items/spring');

  if (!response.ok) {
    throw new Error('An error occurred');
  } else {
    const resData = await response.json();
    return resData;
  }
}
