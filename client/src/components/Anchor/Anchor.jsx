import pt from 'prop-types';
import { Link } from 'react-router-dom';

export default function Anchor({ children, href, style, color, onClick, className = '' }) {
  className += ` button button-color-${color}`;
  const clickCallback = (event) => onClick && onClick(event);
  
  if(href?.startsWith('/')) {
    return (
      <Link 
        to={href}
        style={style}
        className={className} 
        onClick={clickCallback}>
        {children}
      </Link>
    );
  }

  return (
    <a 
      href={href} 
      style={style}
      className={className}
      onClick={clickCallback}
    >
      {children}
    </a>
  );
}

Anchor.propTypes = {
  children: pt.node.isRequired,
  style: pt.object,
  color: pt.number,
  onClick: pt.func,
  className: pt.string,
  href: pt.string.isRequired,
};