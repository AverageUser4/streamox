import pt from 'prop-types';
import { Text } from 'features/ui';

function SuccessMessage({ message }) {
  return (
    <Text 
      style={{ color: 'green' }}
      element="p"
    >
      {message}
    </Text>
  );
}

SuccessMessage.propTypes = {
  message: pt.string.isRequired,
};

export { SuccessMessage };