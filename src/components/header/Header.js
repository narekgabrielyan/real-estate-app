import React from 'react';
import Logo from './components/Logo';
import Authentication from './components/Authentication';
import Navbar from './components/Navbar';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header_content">
        <Logo />
        <Navbar />
        <Authentication />
      </div>
    </div>
  );
};

export default Header;
