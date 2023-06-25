import pt from 'prop-types';
import css from './Select.module.css';
import { defaultOnChange } from 'features/forms/utils';

function Select({ children, name, value, setValue, onChange, validatorCallback }) {
  const usedOnChange = onChange || defaultOnChange.bind(null, { setValue, validatorCallback });

  return (
    <select
      className={css['select']}
      name={name}
      value={value}
      onChange={(e) => usedOnChange(e)}
    >
      {children}
    </select>
  );
}

Select.propTypes = {
  children: pt.node.isRequired,
  name: pt.string,
  value: pt.string.isRequired,
  setValue: pt.func,
  onChange: pt.func,
  validatorCallback: pt.func,
};

export { Select };