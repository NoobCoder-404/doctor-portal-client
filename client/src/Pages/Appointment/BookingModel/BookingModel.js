/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModel = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { user } = useContext(AuthContext);
  // console.log(treatment);
  const { name, slots } = treatment;
  const date = format(selectedDate, 'PP');
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const selectedDate = form.date.value;
    const slot = form.slot.value;
    console.log(name, phone, email, selectedDate, slot);
    const booking = {
      treatmentName: treatment.name,
      patient: patientName,
      email,
      phone,
      appointmentDate: date,
      slot
    };
    console.log(booking);

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success('Booking Confirmed');
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box relative ">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-xl font-bold my-3">{name}</h3>
          <form onSubmit={handleSubmit}>
            <input
              name="date"
              type="text"
              defaultValue={date}
              disabled
              className="input input-bordered w-full  mb-3"
            />
            <select name="slot" className="select select-bordered w-full mb-3">
              {slots.map((slot, i) => (
                <option key={i} defaultValue={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              defaultValue={user?.displayName}
              disabled
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full   mb-3"
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone"
              className="input input-bordered w-full  mb-3"
            />
            <input
              defaultValue={user?.email}
              disabled
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full  mb-3"
            />
            <button className="btn w-full text-white">Button</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModel;
