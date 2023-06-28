import pt from 'prop-types';
import css from './Message.module.css';
import { Text } from 'features/ui';

function Message({ message, type }) {
  return (
    <Text 
      className={css['message']}
      style={{ color: `var(--color-${type})`}}
      element="p"
    >
      {message}
    </Text>
  );
}

Message.propTypes = {
  message: pt.string.isRequired,
  type: pt.oneOf(['success', 'danger']).isRequired,
};

export { Message };