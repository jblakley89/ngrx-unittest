import { Action } from '@ngrx/store';
import { makeActionCreator } from '../action-creator';

export const LOGIN = '[Auth] Login';
export const LOGINERROR = '[Auth] Login Error';
export const SESSIONSTART = '[Auth] Session Start';
export const LOGOUT = '[Auth] Logout';

export const login = makeActionCreator(LOGIN, 'username', 'password');
export const loginError = makeActionCreator(LOGINERROR, 'error');
export const sessionStart = makeActionCreator(SESSIONSTART, 'user', 'token');
export const logout = makeActionCreator(LOGOUT);

