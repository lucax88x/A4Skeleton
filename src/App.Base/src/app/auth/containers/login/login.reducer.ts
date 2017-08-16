import * as _ from 'lodash';

import { LOGIN, LOGIN_COMPLETED, LOGIN_ERROR, LoginActions } from './login.actions';
import { LoginState } from './login.state';

export function LoginReducer(state = new LoginState(), action: LoginActions): LoginState {
  switch (action.type) {
    case LOGIN:
      return _.assign({}, state, {
        lock: true
      });
    case LOGIN_COMPLETED:
      return _.assign({}, state, {
        lock: false
      });
    case LOGIN_ERROR:
      return _.assign({}, state, {
        lock: false
      });

    default:
      return state;
  }
}