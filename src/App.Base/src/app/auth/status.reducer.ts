import * as _ from 'lodash';

import { AuthActions, LOGGED_IN, LOGGED_OUT, LOGIN_ERROR } from './auth.actions';
import { StatusState } from './status.state';

export function StatusReducer(state = new StatusState(), action: AuthActions): StatusState {
  switch (action.type) {
    case LOGGED_IN:
      return _.assign({}, state, {
        loggedIn: true,
        user: null
      });
    case LOGIN_ERROR:
      return _.assign({}, state, {
        loggedIn: false,
        user: null
      });
    case LOGGED_OUT:
      return _.assign({}, state, {
        loggedIn: false,
        user: null
      });

    default:
      return state;
  }
}
