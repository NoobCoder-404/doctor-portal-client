import React from 'react';
import AppointmentBanner from '../../AppointmentBanner/AppointmentBanner';
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
      <AppointmentBanner />
    </div>
  );
};

export default Home;
