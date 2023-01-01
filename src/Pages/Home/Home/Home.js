import React from 'react';
import ExceptionalCare from '../../ExceptionalCare/ExceptionalCare';
import InfoCards from '../../InfoCards.js/InfoCards';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCards />
      <Services />
      <ExceptionalCare />
    </div>
  );
};

export default Home;
