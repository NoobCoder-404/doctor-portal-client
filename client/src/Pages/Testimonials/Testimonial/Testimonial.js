import React from 'react';
import peopleImg from '../../../Assets/images/people1.png';
const Testimonial = () => {
  return (
    <div>
      <div className="shadow-xl p-10 text-black rounded-lg">
        <div className="mb-3">
          <p>
            It is a long established fact that by the readable content of a lot layout. The point of
            using Lorem a more-or-less normal distribu to using Content here.
          </p>
        </div>
        <div className="flex items-center ">
          <div className="mt-3 ring ring-secondary rounded-full ">
            <img src={peopleImg} alt="" />
          </div>
          <div className="ml-10">
            <h2 className="card-title">Winson Herry</h2>
            <p> California </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
