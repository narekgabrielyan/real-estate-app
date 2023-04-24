import React from 'react';
import { useSelector } from 'react-redux';
import './userInfo.scss';

const UserInfo = ({ userId }) => {
  const { users } = useSelector(({ user }) => ({
    users: user.users
  }));
  const user = users.data.find((user) => user.id === userId);

  return (
    <div className="user_info">
      <span className="user_name" title={`${user.userInfo.firstName} ${user.userInfo.lastName}`}>
        <i className="bi-person-circle" />
        <span>{user.userInfo.firstName}</span>
      </span>
      <span className="user_contact">
        <i className="bi-telephone-fill" />
        <span>{user.userInfo.phoneNumber}</span>
      </span>
    </div>
  );
};

export default UserInfo;
