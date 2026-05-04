import type { Token } from '../types/token.ts';
import { getCookie, setCookie, deleteCookie } from './cookies.ts';

const TOKEN_KEY = 'sgtprepper_token';

export const getToken = (): Token | null => {
  try {
    const token = getCookie(TOKEN_KEY);
    return token ? JSON.parse(token) : null;
  } catch {
    return null;
  }
}

export const setToken = (token: string): void => {
  setCookie(TOKEN_KEY, JSON.stringify(token), 7);
}

export const clearToken = (): void => {
  deleteCookie(TOKEN_KEY);
}

export const isTokenExpired = (token: string): boolean => {
  if (!token) return true;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp ? payload.exp * 1000 < Date.now() : true;
  } catch {
    return true;
  }
}