import pt from 'prop-types';
import { Link } from 'react-router-dom';

function Anchor({ children, href, style, color, className = '', isPlainAnchor }) {
  className += ` button button-color-${color}`;
  
  if(isPlainAnchor) {
    return (
      <a 
        href={href} 
        style={style}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      to={href}
      style={style}
      className={className} 
    >
      {children}
    </Link>
  );
}

Anchor.propTypes = {
  children: pt.node.isRequired,
  style: pt.object,
  color: pt.number,
  className: pt.string,
  href: pt.string.isRequired,
  isPlainAnchor: pt.bool,
};

export { Anchor };