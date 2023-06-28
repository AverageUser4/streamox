import pt from 'prop-types';
import { Link } from 'react-router-dom';

function Anchor({ 
  children,
  href,
  style,
  color,
  className = '',
  isPlainAnchor,
  kind = '' 
}) {
  className += ` button button-color-${color} button-kind-${kind}`;
  
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
  color: pt.string,
  className: pt.string,
  href: pt.string.isRequired,
  isPlainAnchor: pt.bool,
  kind: pt.string,
};

export { Anchor };