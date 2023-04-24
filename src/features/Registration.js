import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, addUserLocally } from '../slices/userSlice';
import { USER_TYPES } from '../utils/constants';
import PopupWrapper from '../shared/popup/PopupWrapper';
import DebounceInput from '../shared/input/DebounceInput';
import Message from '../components/message/Message';
import Button from '../shared/button/Button';
import Input from '../shared/input/Input';
import Select from '../shared/select/Select';

const Registration = () => {
  const { users } = useSelector(({ user }) => ({
    users: user.users
  }));
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [lastName, setLastName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [userTypeId, setUserTypeId] = useState(USER_TYPES[0].value);
  const [fulfilled, setFulfilled] = useState(false);

  const dispatch = useDispatch();

  const onRegisterFulfilled = (user) => {
    dispatch(addUserLocally(user));
    setFulfilled(true);
  };

  const onRegister = (e) => {
    e.preventDefault();
    const user = {
      id: Date.now(),
      userName,
      passWord,
      userTypeId,
      userInfo: {
        firstName,
        lastName,
        phoneNumber
      }
    };

    dispatch(addUser({ user }));
    onRegisterFulfilled(user);
  };

  const onSelectUserType = (userType) => {
    setUserTypeId(userType.value);
  };

  const onChangeUserName = (value) => {
    setUserName(value);
    const userNameExists = users.data.some((user) => user.userName === value);
    if (userNameExists) {
      setError('UserName is taken');
    } else {
      setError(null);
    }
  };

  return (
    <PopupWrapper title="Create account">
      {!fulfilled ? (
        <form className="submission_form registration_form" onSubmit={onRegister}>
          <DebounceInput
            id="reg_username_input"
            value={userName}
            onChange={onChangeUserName}
            label="Username"
            placeholder="Enter your username"
          />
          <Input
            id="reg_password_input"
            value={passWord}
            onChange={setPassWord}
            type="password"
            label="Password"
            placeholder="Enter your password"
            required
          />
          <Select options={USER_TYPES} onChange={onSelectUserType} label="Choose account type" />
          <Input
            id="reg_name_input"
            value={firstName}
            onChange={setFirstName}
            type="text"
            label="FirstName"
            required
            placeholder="Enter your name"
          />
          <Input
            id="reg_surname_input"
            value={lastName}
            onChange={setLastName}
            type="text"
            label="LastName"
            required
            placeholder="Enter your surname"
          />
          <Input
            id="reg_phone_number_input"
            value={phoneNumber}
            onChange={setPhoneNumber}
            type="text"
            label="PhoneNumber"
            required
            placeholder="Enter your phone number"
          />
          {error && <Message type="error" message={error} />}
          <Button type="submit" styleType="primary" disabled={error}>
            Create account!
          </Button>
        </form>
      ) : (
        <Message type="success" message="Registration successful!" />
      )}
    </PopupWrapper>
  );
};

export default Registration;
