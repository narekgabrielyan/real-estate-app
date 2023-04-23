import cn from 'classnames';
import './input.scss';

const Input = ({ id, type = 'text', label, value, customCn, onChange, ...props }) => {
  const onInputChange = (e) => {
    onChange(e.target.value);
  };

  const wrapperCn = cn({
    input_wrapper: true,
    [customCn]: !!customCn
  });

  return (
    <div className={wrapperCn}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onInputChange} {...props} />
    </div>
  );
};

export default Input;
