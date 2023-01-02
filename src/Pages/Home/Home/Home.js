import React from 'react';
import ExceptionalCare from '../../ExceptionalCare/ExceptionalCare';
import InfoCards from '../../InfoCards.js/InfoCards';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
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
      <MakeAppointment />
      <Testimonials />
    </div>
  );
};

export default Home;
