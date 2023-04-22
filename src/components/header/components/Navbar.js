import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to={ROUTES.HOME} title="Home" className="navbar_item">
        Home
      </NavLink>

      <NavLink to={ROUTES.PROPERTIES} title="Properties" className="navbar_item">
        Properties
      </NavLink>

      <NavLink to={ROUTES.MY_PROPERTIES} title="My Properties" className="navbar_item">
        My Properties
      </NavLink>
    </nav>
  );
};

export default Navbar;
