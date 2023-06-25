import pt from 'prop-types';
import css from './Label.module.css';
import { Text } from 'features/ui';

function Label({ children, label }) {
  return (
    <label className={css['label']}>
      <Text>{label}</Text>
      {children}
    </label>
  );
}

Label.propTypes = {
  children: pt.node.isRequired,
  label: pt.string.isRequired,
};

export { Label };