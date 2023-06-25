import PropTypes from 'prop-types';
import css from './Card.module.css';

function Card({ children, imageSrc }) {
  return (
    <div className={css['card']}>
      {imageSrc && <img className={css['image']} src={imageSrc}/>}
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  imageSrc: PropTypes.string,
};

export { Card };