import pt from 'prop-types';
import css from './Text.module.css';
import { createElement } from "react";
import mapFontSize from '../../utils/mapFontSize';

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
    style.fontSize = mapFontSize(fontSize);
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
  color: pt.number,
  fontSize: pt.number,
  className: pt.string,
};

export default Text;