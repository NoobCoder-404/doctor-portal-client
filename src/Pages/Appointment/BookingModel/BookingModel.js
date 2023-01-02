/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const BookingModel = ({ treatment, setTreatment }) => {
  console.log(treatment);
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box relative">
          <p className="text-xl font-bold my-3">{name}</p>
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full  my-3"
          />
          <input
            type="text"
            defaultValue={slots[0]}
            className="input input-bordered w-full  my-3"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full  my-3"
          />
          <input type="number" placeholder="Phone" className="input input-bordered w-full  my-3" />
          <input type="email" placeholder="Email" className="input input-bordered w-full  my-3" />
          <input type="button" value="Submit" className="btn w-full  my-3" />
        </div>
      </div>
    </div>
  );
};

export default BookingModel;
