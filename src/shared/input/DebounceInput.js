import { useEffect, useState } from 'react';
import cn from 'classnames';
import './input.scss';

let timeoutId = null;

const DebounceInput = ({ delay = 400, label, value, customCn, onChange, id, ...props }) => {
  const [inputValue, setInputValue] = useState(value || '');

  const onChangeWithDebounce = (event) => {
    clearTimeout(timeoutId);
    event.persist();
    setInputValue(event.target.value);
    timeoutId = setTimeout(() => {
      onChange(event.target.value);
    }, delay);
  };

  const wrapperCn = cn({
    input_wrapper: true,
    [customCn]: !!customCn
  });

  useEffect(() => {
    if (value !== inputValue) setInputValue(value);
  }, [value]);

  return (
    <div className={wrapperCn}>
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <input value={inputValue} onChange={onChangeWithDebounce} id={id} {...props} />
    </div>
  );
};

export default DebounceInput;
