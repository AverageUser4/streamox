import pt from 'prop-types';

function Option({ children, value }) {
  return (
    <option value={value}>{children}</option>
  );
}

Option.propTypes = {
  children: pt.node.isRequired,
  value: pt.string.isRequired,
};

export { Option };