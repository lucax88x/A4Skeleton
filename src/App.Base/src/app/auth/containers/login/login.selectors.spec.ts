import { AuthState } from '../../auth.state';
import { LoginSelectors } from './login.selectors';

describe('LoginSelectors', () => {

  let state: { auth: AuthState } = {
    auth: {
      status: {
        loggedIn: false,
        user: null,
      },
      login: {
        lock: true
      }
    }
  };

  it('should return lock', () => {
    //SETUP && ACT
    const result = LoginSelectors.Lock(state);

    //TEST
    expect(result).toEqual(true);
  });
});