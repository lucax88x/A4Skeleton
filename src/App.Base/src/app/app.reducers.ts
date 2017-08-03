import { ActionReducerMap } from '@ngrx/store';

import { State } from './app.state';
import { UserListReducer } from './containers/user-list/user-list.reducer';

export const AppReducers: ActionReducerMap<State> = {
    userList: UserListReducer
};