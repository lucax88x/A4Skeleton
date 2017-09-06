import { Action } from '@ngrx/store';
import { Auth0Error } from 'auth0-js';

export const LOGIN = '[Auth] Login';
export const LOGGED_IN = '[Auth] Logged In';
export const LOGIN_ERROR = '[Auth] Login Error';
export const LOGOUT = '[Auth] Logout';
export const LOGGED_OUT = '[Auth] Logged out';
export const NOT_AUTHORIZED = '[Auth] Not Authorized';

export class LoginAction implements Action {
  readonly type = LOGIN;
}

export class LoggedInAction implements Action {
  readonly type = LOGGED_IN;
}

export class LoginErrorAction implements Action {
  readonly type = LOGIN_ERROR;

  constructor(public payload: Auth0Error) { }
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export class LoggedOutAction implements Action {
  readonly type = LOGGED_OUT;
}

export class NotAuthorizedAction implements Action {
  readonly type = NOT_AUTHORIZED;
}


export type AuthActions = LoginAction | LoggedInAction | LoginErrorAction | LogoutAction | LoggedOutAction | NotAuthorizedAction;
