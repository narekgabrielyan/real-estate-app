import React from 'react';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../../slices/userSlice';
import Button from '../../../shared/button/Button';

const Avatar = ({ firstName, lastName }) => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <div className="avatar">
      <i className="bi-person-circle" />
      <div>
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <Button styleType="secondary" onClick={onLogOut}>
        Log out
      </Button>
    </div>
  );
};

export default Avatar;
