import css from './Loading.module.css';
import pt from 'prop-types';

function Loading({ style = {} }) {
  return (
    <div 
      className={css['loading']}
      style={style}
    />
  );
}

Loading.propTypes = {
  style: pt.object,
};

export { Loading };