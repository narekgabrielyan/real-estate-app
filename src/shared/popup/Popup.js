import React from 'react';
import { useSelector } from 'react-redux';
import { LOGIN, REGISTRATION } from '../../utils/popupTypes';
import Login from '../../features/auth/Login';
import Registration from '../../features/auth/Registration';
import './popup.scss';

const Popup = () => {
  const { popup } = useSelector(({ common }) => ({
    popup: common.ui.popup
  }));

  const openedPopupType = popup?.type;

  switch (openedPopupType) {
    case LOGIN:
      return <Login />;
    case REGISTRATION:
      return <Registration />;
    default:
      return null;
  }
};

export default Popup;
