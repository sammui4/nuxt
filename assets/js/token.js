// token操作
export function setToken (token) {
  localStorage.setItem('__sale__token__', token);
}

export function getToken () {
  return localStorage.getItem('__sale__token__') || '';
}

export function removeToken() {
  localStorage.removeItem('__sale__token__');
}

// 本地缓存记住是否选择记住登录状态
export function setRememberMe (token) {
  localStorage.setItem('__sale__rememberMe__', token);
}

export function getRememberMe () {
  return localStorage.getItem('__sale__rememberMe__') || '';
}

export function removeRememberMe() {
  localStorage.removeItem('__sale__rememberMe__');
}

// 会话状态记住是否选择记住登录状态
export function setRememberMe_session (token) {
  sessionStorage.setItem('__sale__rememberMe__session__', token);
}

export function getRememberMe_session () {
  return sessionStorage.getItem('__sale__rememberMe__session__') || '';
}


