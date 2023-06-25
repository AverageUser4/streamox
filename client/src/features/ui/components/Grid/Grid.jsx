import css from './Grid.module.css';
import pt from 'prop-types';

function Grid({ children }) {
  return (
    <div className={css['grid']}>
      {children}
    </div>
  );
}

Grid.propTypes = {
  children: pt.node.isRequired,
};

export { Grid };