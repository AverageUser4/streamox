import css from './Input.module.css';
import pt from 'prop-types';
import { defaultOnChange } from 'features/forms/utils';

function Input({ 
  type = 'text',
  name,
  placeholder,
  value,
  setValue,
  onChange,
  validatorCallback
}) {
  const usedOnChange = onChange || defaultOnChange.bind(null, { setValue, validatorCallback });

  return (
    <input 
      className={css['input']}
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={(e) => { usedOnChange(e); }}
    />
  );
}

Input.propTypes = {
  type: pt.string,
  name: pt.string,
  label: pt.string,
  placeholder: pt.string,
  value: pt.any,
  setValue: pt.func,
  onChange: pt.func,
  validatorCallback: pt.func,
};

export { Input };