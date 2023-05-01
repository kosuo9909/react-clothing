import { Fragment } from 'react';
import Header from '../components/Layout/Header';
import SeasonsPageComponent from '../components/UI/seasonal-grid/SeasonsPageComponent';
import { Outlet } from 'react-router-dom';
const SeasonsPage = () => {
  return (
    <Fragment>
      <SeasonsPageComponent />
    </Fragment>
  );
};

export default SeasonsPage;
