import { Fragment } from 'react';
import Header from '../components/Layout/Header';
import PrimaryHeading from '../components/UI/PrimaryHeading';
import { Outlet } from 'react-router-dom';

const Home = (props) => {
  return (
    <Fragment>
      <PrimaryHeading />
    </Fragment>
  );
};

export default Home;
