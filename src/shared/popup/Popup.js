import React from 'react';
import { useSelector } from 'react-redux';
import { ADD_PROPERTY, LOGIN, REGISTRATION } from '../../utils/popupTypes';
import Login from '../../features/Login';
import Registration from '../../features/Registration';
import AddProperty from '../../features/AddProperty';
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
    case ADD_PROPERTY:
      return <AddProperty />;
    default:
      return null;
  }
};

export default Popup;
