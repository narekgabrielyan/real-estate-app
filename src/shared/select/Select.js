import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import './select.scss';

const Select = ({ options, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options?.[0]);
  const containerRef = useRef(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    const outsideClickHandler = (e) => {
      if (!containerEl.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', outsideClickHandler);
    return () => {
      window.removeEventListener('click', outsideClickHandler);
    };
  });

  const onOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  const wrapperCn = cn({
    select_wrapper: true,
    'select_wrapper-open': isOpen
  });

  return (
    <div className={wrapperCn}>
      {label && <span className="label">{label}</span>}
      <div ref={containerRef} className="select_inner_wrapper">
        <div className="select_panel" onClick={() => setIsOpen(!isOpen)}>
          <span>{selectedOption.name}</span>
          <i />
        </div>
        {isOpen && (
          <div className="options_wrapper">
            {options?.map((option) => {
              const optionCn = cn({
                option: true,
                'option-selected': selectedOption.value === option.value
              });
              return (
                <div className={optionCn} key={option.name} onClick={() => onOptionSelect(option)}>
                  {option.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
