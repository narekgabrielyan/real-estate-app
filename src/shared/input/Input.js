import cn from 'classnames';
import './input.scss';

const Input = ({ id, label, value, customCn, onChange, ...props }) => {
  const onInputChange = (e) => {
    onChange(e.target.value);
  };

  const wrapperCn = cn({
    input_wrapper: true,
    [customCn]: !!customCn
  });

  return (
    <div className={wrapperCn}>
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <input id={id} value={value} onChange={onInputChange} {...props} />
    </div>
  );
};

export default Input;
