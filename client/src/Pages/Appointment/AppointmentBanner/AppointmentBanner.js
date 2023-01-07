/* eslint-disable react/prop-types */
import React from 'react';
import { DayPicker } from 'react-day-picker';
import bgImage from '../../../Assets/images/bg.png';
import chair from '../../../Assets/images/chair.png';
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <div
        className="hero"
        style={{
          background: `url(${bgImage})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          height: '700px'
        }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="lg:max-w-screen-sm  rounded-lg shadow-2xl" />
          <div className="shadow-2xl bg-base-100 rounded-lg lg:mx-20">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(data) => {
                if (data) {
                  setSelectedDate(data);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
