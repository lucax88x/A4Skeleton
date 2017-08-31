import * as _ from 'lodash';

import { AuthActions, LOGIN, LOGIN_ERROR, LOGIN_FAILED, LOGIN_SUCCESS } from '../../auth.actions';
import { LoginState } from './login.state';

export function LoginReducer(state = new LoginState(), action: AuthActions): LoginState {
  switch (action.type) {
    case LOGIN:
      return _.assign({}, state, {
        lock: true
      });
    case LOGIN_SUCCESS:
      return _.assign({}, state, {
        lock: false
      });
    case LOGIN_FAILED:
    case LOGIN_ERROR:
      return _.assign({}, state, {
        lock: false
      });

    default:
      return state;
  }
}