import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants';

const Navbar = () => {
  const { currentUser } = useSelector(({ user }) => ({
    currentUser: user.currentUser
  }));
  return (
    <nav className="navbar">
      <NavLink to={ROUTES.HOME} title="Home" className="navbar_item">
        Home
      </NavLink>

      <NavLink to={ROUTES.PROPERTIES} title="Properties" className="navbar_item">
        Properties
      </NavLink>

      {currentUser && (
        <NavLink to={ROUTES.MY_PROPERTIES} title="My Properties" className="navbar_item">
          My Properties
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
