import { useState } from 'react';
import './textArea.scss';

const TextArea = ({ id, label, onChange, ...props }) => {
  const [areaValue, setAreaValue] = useState('');

  const onAreaChange = (e) => {
    setAreaValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div className="text_area_wrapper">
      {label && (
        <label htmlFor={id} className="label">
          <span>{label}</span>
        </label>
      )}
      <textarea id={id} onChange={onAreaChange} value={areaValue} {...props} />
    </div>
  );
};

export default TextArea;
