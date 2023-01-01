import React from 'react';
import AppointmentBanner from '../../AppointmentBanner/AppointmentBanner';
import ExceptionalCare from '../../ExceptionalCare/ExceptionalCare';
import InfoCards from '../../InfoCards.js/InfoCards';
import Services from '../../Services/Services';
import Testimonials from '../../Testimonials/Testimonials';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCards />
      <Services />
      <ExceptionalCare />
      <AppointmentBanner />
      <Testimonials />
    </div>
  );
};

export default Home;
