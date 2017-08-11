import { Action } from '@ngrx/store';

export const LOGIN = '[Login] Login';
export const LOGIN_COMPLETE = '[Login] Login Complete';
export const LOGIN_ERROR = '[Login] Login Error';

export class LoginAction implements Action {
  readonly type = LOGIN;
}

export class LoginCompleteAction implements Action {
  readonly type = LOGIN_COMPLETE;
}

export class LoginErrorAction implements Action {
  readonly type = LOGIN_ERROR;

  constructor(public payload: string) { }
}

export type LoginActions = LoginAction | LoginCompleteAction | LoginErrorAction;