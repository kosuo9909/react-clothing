import { Fragment } from 'react';
import Header from '../components/Layout/Header';
import SeasonsPageComponent from '../components/UI/seasonal-grid/SeasonsPageComponent';
const SeasonsPage = () => {
  return (
    <Fragment>
      <Header />
      <SeasonsPageComponent />
    </Fragment>
  );
};

export default SeasonsPage;
