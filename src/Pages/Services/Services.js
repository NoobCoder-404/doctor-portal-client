import React from 'react';
import Cavity from '../../Assets/images/cavity.png';
import Fluoride from '../../Assets/images/fluoride.png';
import Whitening from '../../Assets/images/whitening.png';
import Service from './Service/Service';

const Services = () => {
  const serviceData = [
    {
      name: 'Fluoride Treatment',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.',
      icon: Fluoride
    },
    {
      name: 'Cavity Filling',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.',
      icon: Cavity
    },
    {
      name: 'Fluoride Treatment',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.',
      icon: Whitening
    }
  ];
  return (
    <div className="mt-20">
      <div className="text-center pb-3">
        <h3 className="font-bold text-secondary text-xl">Our Services</h3>
        <h1 className="text-3xl">Services We Provide</h1>
      </div>
      <div className="  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 m-3 justify-center">
        {serviceData.map((serviceCard, i) => (
          <Service key={i} serviceCard={serviceCard}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
