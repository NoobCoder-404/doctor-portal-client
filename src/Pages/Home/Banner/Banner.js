import React from 'react';
import bannerImage from '../../../Assets/images/chair.png';
import Button from '../../../Components/Button/Button';
import './Banner.css';
const Banner = () => {
  return (
    <div className="mt-6">
      <div className="banner-bg hero  bg-no-repeat bg-bottom bg-cover">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImage} className="lg:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
