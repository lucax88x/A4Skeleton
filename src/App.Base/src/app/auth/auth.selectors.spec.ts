import { AuthSelectors } from './auth.selectors';
import { AuthState } from './auth.state';

describe('AuthSelectors', () => {

  const state: { auth: AuthState } = {
    auth: {
      status: {
        loggedIn: true,
        user: null,
      }
    }
  };

  it('should return lock', () => {
    // SETUP && ACT
    const result = AuthSelectors.LoggedIn(state);

    // TEST
    expect(result).toEqual(true);
  });
});
