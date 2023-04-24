import { useEffect } from 'react';

export const useOutsideClick = (ref, callback, param) => {
  useEffect(() => {
    const onOutsideClick = ({ target }) => {
      if (ref.current && !ref.current.contains(target)) {
        callback(param);
      }
    };
    document.addEventListener('click', onOutsideClick);
    return () => {
      document.removeEventListener('click', onOutsideClick);
    };
  });
};
