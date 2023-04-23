import React from 'react';
import Logo from './components/Logo';
import Authentication from './components/Authentication';
import Navbar from './components/Navbar';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navbar />
      <Authentication />
    </div>
  );
};

export default Header;
