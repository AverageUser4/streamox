export default function mapFontSize(size) {
  if(!Number.isInteger(size) || size === 0) {
    return 'var(--size-normal)';
  } else if(size > 0) {
    return `var(--size-big-${size})`;
  } else {
    return `var(--size-small-${Math.abs(size)})`;
  }
}