import React from 'react';
import DoctorImg from '../../Assets/images/doctor-small.png';
import Button from '../../Components/Button/Button';
import './MakeAppointment.css';
const MakeAppointment = () => {
  return (
    <div>
      <div className="lg:mt-32 hero  text-white appointmentImg  mx-3">
        <div className="hero-content flex-col lg:flex-row p-0 ">
          <img src={DoctorImg} className="w-full -mt-24 hidden lg:block " />
          <div className="mx-5">
            <div>
              <div className="mt-6">
                <h3 className="text-lg text-secondary font-bold pb-3">Appointment</h3>
              </div>
              <div className="pb-10">
                <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                  exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
