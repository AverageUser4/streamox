import pt from 'prop-types';
import { Text } from 'features/ui';

function ErrorMessage({ message }) {
  return (
    <Text 
      style={{ color: 'red' }}
      element="p"
    >
      {message}
    </Text>
  );
}

ErrorMessage.propTypes = {
  message: pt.string.isRequired,
};

export { ErrorMessage };