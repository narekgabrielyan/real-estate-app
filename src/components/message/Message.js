import React from 'react';
import cn from 'classnames';
import './message.scss';

const Message = ({ type, message }) => {
  const messageCn = cn({
    message: true,
    [`message-${type}`]: !!type
  });

  const iconCn = cn({
    'bi-exclamation-triangle-fill': type === 'error' || type === 'warning',
    'bi-check-circle-fill': type === 'success',
    'bi-info-circle-fill': type === 'info'
  });

  return (
    <div className={messageCn}>
      <i className={iconCn} />
      <span>{message}</span>
    </div>
  );
};

export default Message;
