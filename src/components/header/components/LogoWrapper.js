import React from 'react';
import logo from '../../../assets/img/logo.png';

const LogoWrapper = () => {
  return (
    <div className="logo_wrapper">
      <span className="logo">
        <img src={logo} alt="Brand Logo" />
      </span>
      <span className="brand_name">Real Estate Agency</span>
    </div>
  );
};

export default LogoWrapper;
