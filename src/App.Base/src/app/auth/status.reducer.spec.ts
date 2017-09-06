import { AuthActions, LoggedInAction, LoginErrorAction } from './auth.actions';
import { StatusReducer } from './status.reducer';
import { StatusState } from './status.state';

describe('StatusReducer', () => {
    it('should return the default state', () => {
        // SETUP && ACT
        const result = StatusReducer(undefined, {} as AuthActions);

        // TEST
        expect(result).toEqual(new StatusState());
    });

    describe('LOGGED_IN', () => {
        it('should correctly set the user and loggedIn status', () => {
            // SETUP
            const result = StatusReducer(undefined, new LoggedInAction());

            // TEST
            expect(result).toEqual(
                {
                    loggedIn: true,
                    user: null
                });
        });
    });

    describe('LOGIN_ERROR', () => {
        it('should remove the loggedIn status and delete the user', () => {
            // SETUP
            const result = StatusReducer(undefined, new LoginErrorAction({}));

            // TEST
            expect(result).toEqual(
                {
                    loggedIn: false,
                    user: null
                });
        });
    });
});
