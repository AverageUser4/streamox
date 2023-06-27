import pt from 'prop-types';
import css from './Text.module.css';
import { createElement } from "react";

function Text({ 
  children,
  element = 'span',
  variant = '',
  style = {},
  color = 1,
  fontSize = 0,
  className = '',
}) {
  className += ` ${css['text']} ${css[variant]}`;
  if(!style.color) {
    style.color = `var(--color-${color})`;
  }
  if(!style.fontSize) {
    if(!Number.isInteger(fontSize) || fontSize === 0) {
      style.fontSize = 'var(--size-normal)';
    } else if(fontSize > 0) {
      style.fontSize = `var(--size-big-${fontSize})`;
    } else {
      style.fontSize = `var(--size-small-${Math.abs(fontSize)})`;
    }
  }
  
  return (
    createElement(element, { style, className }, children)
  );
}

Text.propTypes = {
  children: pt.node.isRequired,
  element: pt.string,
  style: pt.object,
  variant: pt.string,
  color: pt.string,
  fontSize: pt.number,  
  className: pt.string,
};

export { Text };