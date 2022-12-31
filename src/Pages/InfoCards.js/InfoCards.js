import React from 'react';
import clock from '../../Assets/icons/clock.svg';
import marker from '../../Assets/icons/marker.svg';
import phone from '../../Assets/icons/phone.svg';
import InfoCard from './InfoCard/InfoCard';

const InfoCards = () => {
  const cardData = [
    {
      name: 'Opening Hours',
      description: 'Open 9.00 am to 5.00 pm everyday',
      icon: clock,
      bgColor: 'bg-gradient-to-r from-secondary to-accent'
    },
    {
      name: 'Out Locations',
      description: 'Open 9.00 am to 5.00 pm everyday',
      icon: marker,
      bgColor: 'bg-primary'
    },
    {
      name: 'Contact Us',
      description: 'Open 9.00 am to 5.00 pm everyday',
      icon: phone,
      bgColor: 'bg-gradient-to-r from-secondary to-accent'
    }
  ];
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cardData.map((card, i) => (
        <InfoCard key={i} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
