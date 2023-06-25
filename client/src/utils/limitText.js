export function limitText(text, limit = 150) {
  if(text.length <= limit) {
    return text;
  }
  return text.slice(0, limit).trim() + '...';
}