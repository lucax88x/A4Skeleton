import { Action } from '@ngrx/store';

export const NOT_AUTHENTICATED = '[Auth] Not Authenticated';

export class NotAuthenticatedAction implements Action {
  readonly type = NOT_AUTHENTICATED;
}


export type AuthActions = NotAuthenticatedAction;