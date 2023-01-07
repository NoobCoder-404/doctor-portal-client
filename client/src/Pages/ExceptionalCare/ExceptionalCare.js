/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import TreatmentImg from '../../Assets/images/treatment.png';
import Button from '../../Components/Button/Button';
const ExceptionalCare = () => {
  return (
    <div className="mt-20">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={TreatmentImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-4xl font-bold">
              Exceptional Dental Care, <br /> on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
              more-or-less normal distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop publishing packages and web
              page.
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalCare;
