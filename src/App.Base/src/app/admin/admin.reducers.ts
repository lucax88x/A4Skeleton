import { ActionReducerMap } from '@ngrx/store';

import { AdminState } from './admin.state';
import { UserListReducer } from './containers/user-list/user-list.reducer';

export const AdminReducers: ActionReducerMap<AdminState> = {
    userList: UserListReducer
};