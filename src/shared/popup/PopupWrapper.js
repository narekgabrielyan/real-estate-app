import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { clearPopup } from '../../slices/commonSlice';

const PopupWrapper = ({ title, children }) => {
  const dispatch = useDispatch();

  const onClosePopup = () => {
    dispatch(clearPopup());
  };

  return (
    <div className="popup_container">
      <div className="popup_backdrop" onClick={onClosePopup} />
      <div className="popup">
        <div className="popup_header">
          <span title={title}>{title}</span>
          <i className="bi-x-lg" onClick={onClosePopup} />
        </div>
        <div className="popup_content">{children}</div>
      </div>
    </div>
  );
};

export default PopupWrapper;
