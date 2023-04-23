import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearPopup } from '../../slices/commonSlice';
import { logInUser } from '../../slices/userSlice';
import Input from '../../shared/input/Input';
import Button from '../../shared/button/Button';
import Message from '../../components/message/Message';
import PopupWrapper from '../../shared/popup/PopupWrapper';
import './index.scss';

const Login = () => {
  const { users } = useSelector(({ user }) => ({
    users: user.users
  }));
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();

    const foundUser = users.data.find((user) => user.userName === userName);

    if (!!foundUser) {
      if (foundUser.passWord === passWord) {
        dispatch(logInUser({ user: foundUser }));
        dispatch(clearPopup());
      } else {
        setError('Incorrect password');
      }
    } else {
      setError('No user was found with given username');
    }
  };

  return (
    <PopupWrapper title="Log in">
      <div className="submission_form login_form">
        <Input
          value={userName}
          onChange={setUserName}
          label="Username"
          placeholder="Enter your username"
        />
        <Input
          value={passWord}
          onChange={setPassWord}
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
        {error && <Message type="error" message={error} />}
        <Button styleType="primary" onClick={onLogin} disabled={!userName || !passWord}>
          Click to login
        </Button>
      </div>
    </PopupWrapper>
  );
};

export default Login;
