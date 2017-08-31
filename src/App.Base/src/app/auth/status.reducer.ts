import * as _ from 'lodash';

import { AuthActions, LOGIN_ERROR, LOGIN_FAILED, LOGIN_SUCCESS } from './auth.actions';
import { StatusState } from './status.state';

export function StatusReducer(state = new StatusState(), action: AuthActions): StatusState {
  switch (action.type) {    
    case LOGIN_SUCCESS:
      return _.assign({}, state, {
        loggedIn: true,
        user: null
      });
    case LOGIN_FAILED:
    case LOGIN_ERROR:
      return _.assign({}, state, {
        loggedIn: false,
        user: null
      });

    default:
      return state;
  }
}