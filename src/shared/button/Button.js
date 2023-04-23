import React from 'react';
import cn from 'classnames';
import './button.scss';

const Button = ({ type, styleType, onClick, customCn, children, ...props }) => {
  const btnCn = cn({
    button: true,
    [`button-${styleType}`]: !!styleType,
    [customCn]: !!customCn
  });

  return (
    <button type={type} onClick={onClick} className={btnCn} {...props}>
      {children}
    </button>
  );
};

export default Button;
