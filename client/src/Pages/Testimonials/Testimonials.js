import React from 'react';

import Testimonial from './Testimonial/Testimonial';
const Testimonials = () => {
  // const testimonialData = [
  //   {
  //     name: 'Winson Herry',
  //     division: 'California',
  //     desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
  //     photo: peopleImg
  //   }
  // ];
  return (
    <div className="lg:mt-20">
      <div className="mb-10 mx-3">
        <h3 className="font-bold text-xl text-secondary">Testmonial</h3>
        <p className="text-4xl">What Our Patients Says</p>
      </div>
      <div>
        <div className="  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3">
          {[...Array(3)].map((_, i) => (
            <Testimonial key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
