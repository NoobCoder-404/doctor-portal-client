/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModel from '../BookingModel/BookingModel';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
const AvailableAppointments = ({ selectedDate }) => {
  // const [availableOptions, setAvailableOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const { data: availableOptions = [] } = useQuery({
    queryKey: ['appointmentOptions'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/appointmentOptions');
      const data = res.json();
      return data;
    }
  });

  // const { data: availableOptions = [] } = useQuery({
  //   queryKey: ['appointmentOptions'],
  //   queryFn: () => fetch('http://localhost:5000/appointmentOptions').then((res) => res.json())
  // });

  // useEffect(() => {
  //   fetch('http://localhost:5000/appointmentOptions')
  //     .then((res) => res.json())
  //     .then((data) => setAvailableOptions(data));
  // }, []);
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
