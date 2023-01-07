/* eslint-disable react/prop-types */
import React from 'react';

const AvailableAppointment = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div>
      <div className="card lg:w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
          <p>
            {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
          </p>
          <div className="card-actions">
            <label
              disabled={slots.length === 0}
              onClick={() => setTreatment(option)}
              htmlFor="booking-modal"
              className="btn button-design text-white">
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
