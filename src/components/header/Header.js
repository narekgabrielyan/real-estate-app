import React from 'react';
import LogoWrapper from './components/LogoWrapper';
import AuthWrapper from './components/AuthWrapper';
import Navbar from './components/Navbar';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <LogoWrapper />
      <Navbar />
      <AuthWrapper />
    </div>
  );
};

export default Header;
