import css from './TextArea.module.css';
import pt from 'prop-types';
import { defaultOnChange } from 'features/forms/utils';

function TextArea({ 
  name,
  placeholder,
  value,
  setValue,
  onChange,
  validatorCallback
}) {
  const usedOnChange = onChange || defaultOnChange.bind(null, { setValue, validatorCallback });

  return (
    <textarea
      className={css['textarea']}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => usedOnChange(e)}
    />
  )
}

TextArea.propTypes = {
  name: pt.string,
  label: pt.string,
  placeholder: pt.string,
  value: pt.any,
  setValue: pt.func,
  onChange: pt.func,
  validatorCallback: pt.func,
};

export { TextArea };