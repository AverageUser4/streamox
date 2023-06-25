import pt from 'prop-types';
import css from './ProfilePicture.module.css';

function ProfilePicture({ src, size = 64, className = '' }) {
  className += ` ${css['image']}`;

  return (
    <img 
      className={className}
      src={src}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}

ProfilePicture.propTypes = {
  src: pt.string.isRequired,
  size: pt.number,
  className: pt.string,
};

export { ProfilePicture };