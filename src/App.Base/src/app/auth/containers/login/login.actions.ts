import { Action } from '@ngrx/store';

export const LOGIN = '[Login] Login';
export const LOGIN_COMPLETED = '[Login] Login Completed';
export const LOGIN_FAILED = '[Login] Login Failed';
export const LOGIN_ERROR = '[Login] Login Error';

export class LoginAction implements Action {
  readonly type = LOGIN;
}

export class LoginCompletedAction implements Action {
  readonly type = LOGIN_COMPLETED;
}

export class LoginFailedAction implements Action {
  readonly type = LOGIN_FAILED;
}

export class LoginErrorAction implements Action {
  readonly type = LOGIN_ERROR;

  constructor(public payload: string) { }
}

export type LoginActions = LoginAction | LoginCompletedAction | LoginFailedAction | LoginErrorAction;