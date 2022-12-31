import React from 'react';
import InfoCards from '../../InfoCards.js/InfoCards';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCards />
      <Services />
    </div>
  );
};

export default Home;
