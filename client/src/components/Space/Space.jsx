import pt from 'prop-types';

function Space({ size = 64 }) {
  return (
    <div
      style={{
        height: size,
      }}
    />
  );
}

Space.propTypes = {
  size: pt.number,
};

export default Space;