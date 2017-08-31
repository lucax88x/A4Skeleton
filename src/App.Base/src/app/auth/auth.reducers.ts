import { StatusReducer } from './status.reducer';
import { ActionReducerMap } from '@ngrx/store';

import { AuthState } from './auth.state';
import { LoginReducer } from './containers/login/login.reducer';

export const AuthReducers: ActionReducerMap<AuthState> = {
    login: LoginReducer,
    status: StatusReducer
};