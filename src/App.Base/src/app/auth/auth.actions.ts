import { Action } from '@ngrx/store';

import { Authenticate } from './models/user';

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILED = '[Auth] Login Failed';
export const LOGIN_ERROR = '[Auth] Login Error';
export const LOGIN_REDIRECT = '[Auth] Not Authenticated';

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: Authenticate) {

  }
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;
}

export class LoginFailedAction implements Action {
  readonly type = LOGIN_FAILED;
}

export class LoginErrorAction implements Action {
  readonly type = LOGIN_ERROR;

  constructor(public payload: string) { }
}

export class LoginRedirectAction implements Action {
  readonly type = LOGIN_REDIRECT;
}

export type AuthActions = LoginAction | LogoutAction | LoginSuccessAction | LoginFailedAction | LoginErrorAction | LoginRedirectAction;