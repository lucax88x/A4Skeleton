import { AuthState } from '../../auth.state';
import { LoginSelectors } from './login.selectors';

describe('LoginSelectors', () => {

  let state: AuthState = {
    login: {
      lock: false
    }
  };

  it('should return lock', () => {
    //SETUP && ACT
    const result = LoginSelectors.Lock(state);

    //TEST
    expect(result).toEqual(state.login.lock);
  });
});