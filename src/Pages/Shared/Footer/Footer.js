import React from 'react';
import footerImg from '../../../Assets/images/footer.png';
const Footer = () => {
  return (
    <div
      className="mt-16"
      style={{
        background: `url(${footerImg})`,
        backgroundSize: 'auto',
        backgroundPosition: 'center'
      }}>
      <footer className="footer p-10  text-black lg:mx-36">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="pt-10 text-center pb-10">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
