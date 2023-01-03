/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModel from '../BookingModel/BookingModel';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
const AvailableAppointments = ({ selectedDate }) => {
  const [availableOptions, setAvailableOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch('appointmentOptions.json')
      .then((res) => res.json())
      .then((data) => setAvailableOptions(data));
  }, []);
  return (
    <div className="mt-16">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, 'PP')}.
      </p>
      <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-20 mx-3">
        {availableOptions.map((option, i) => (
          <AvailableAppointment key={i} option={option} setTreatment={setTreatment} />
        ))}
      </div>
      {treatment && (
        <BookingModel
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
