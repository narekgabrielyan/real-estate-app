import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '../../../slices/commonSlice';
import { login, registration } from '../../../utils/popupTypes';
import Button from '../../../shared/button/Button';
import UserInfo from '../../userInfo/UserInfo';
import { logOutUser } from '../../../slices/userSlice';

const Authentication = () => {
  const { currentUser } = useSelector(({ user }) => ({
    currentUser: user.currentUser
  }));
  const dispatch = useDispatch();

  const onOpenPopup = (popup) => {
    dispatch(setPopup(popup));
  };

  const onLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <div className="auth_wrapper">
      {currentUser ? (
        <>
          <UserInfo userId={currentUser.id} />
          <Button styleType="secondary" onClick={onLogOut}>
            Log out
          </Button>
        </>
      ) : (
        <>
          <Button customCn="auth_btn-login" onClick={() => onOpenPopup(login)}>
            Log in
          </Button>
          <Button
            customCn="auth_btn-register"
            styleType="primary"
            onClick={() => onOpenPopup(registration)}
          >
            Sign up
          </Button>
        </>
      )}
    </div>
  );
};

export default Authentication;
