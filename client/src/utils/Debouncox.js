export class Debouncox {
  timeoutId = null;
  
  debounce(url, options = {}, ms) {
    clearTimeout(this.timeoutId);
    
    this.timeoutId = setTimeout(() => {
      fetch(url, options);
    }, ms);
  }
}