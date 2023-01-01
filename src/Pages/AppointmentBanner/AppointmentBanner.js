import React from 'react';
import DoctorImg from '../../Assets/images/doctor-small.png';
import Button from '../../Components/Button/Button';
import './AppointmentBanner.css';
const AppointmentBanner = () => {
  return (
    <div>
      <div className="lg:mt-32 hero min-h-screen  text-white appointmentImg">
        <div className="hero-content flex-col lg:flex-row p-0 ">
          <img src={DoctorImg} className="w-full -mt-20 hidden lg:block " />
          <div className="mx-5">
            <div>
              <div>
                <h3 className="text-lg text-secondary font-bold pb-3">Appointment</h3>
              </div>
              <div>
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

export default AppointmentBanner;
