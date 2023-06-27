export function setCookie(key, value) {
  document.cookie = `${key}=${value}; SameSite=None; Secure`;
}