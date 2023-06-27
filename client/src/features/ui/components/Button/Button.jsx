import pt from 'prop-types';

function Button({ children, style, color, onClick, className = '', type, kind, name }) {
  className += ` button button-color-${color} button-kind-${kind}`;
  const clickCallback = (event) => onClick && onClick(event);
  
  return (
    <button
      style={style}
      className={className}
      onClick={clickCallback}
      type={type}
      name={name}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: pt.node.isRequired,
  style: pt.object,
  color: pt.number,
  onClick: pt.func,
  className: pt.string,
  type: pt.string,
  kind: pt.string,
  name: pt.string,
};

export { Button };