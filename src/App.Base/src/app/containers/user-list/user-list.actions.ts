import { Action } from '@ngrx/store';

import { User } from '../../models/user';

export const SEARCH_USER = '[User-List] Search User';
export const SEARCH_USER_COMPLETE = '[User-List] Search User Complete';
export const SEARCH_USER_ERROR = '[User-List] Search User Error';

export class SearchUserAction implements Action {
  readonly type = SEARCH_USER;
}

export class SearchUserCompleteAction implements Action {
  readonly type = SEARCH_USER_COMPLETE;

  constructor(public payload: User[]) { }
}

export class SearchUserErrorAction implements Action {
  readonly type = SEARCH_USER_ERROR;

  constructor(public payload: string) { }
}

export type Actions = SearchUserAction | SearchUserCompleteAction | SearchUserErrorAction;