import { AuthenticateBuilder } from './spec/builders/authenticate-builder';
import { StatusState } from './status.state';
import { AuthActions, LoginAction, LoginErrorAction, LoginFailedAction, LoginSuccessAction } from './auth.actions';
import { StatusReducer } from './status.reducer';

describe('StatusReducer', () => {
    it('should return the default state', () => {
        //SETUP && ACT
        const result = StatusReducer(undefined, {} as AuthActions);

        //TEST
        expect(result).toEqual(new StatusState());
    });

    describe('LOGIN_COMPLETE', () => {
        it('should correctly set the user and loggedIn status', () => {
            //SETUP
            const result = StatusReducer(undefined, new LoginSuccessAction());

            //TEST
            expect(result).toEqual(
                {
                    loggedIn: true,
                    user: null
                });
        });
    });

    describe('LOGIN_FAILED', () => {
        it('should remove the loggedIn status and delete the user', () => {
            //SETUP
            const result = StatusReducer(undefined, new LoginFailedAction());

            //TEST
            expect(result).toEqual(
                {
                    loggedIn: false,
                    user: null
                });
        });
    });

    describe('LOGIN_ERROR', () => {
        it('should remove the loggedIn status and delete the user', () => {
            //SETUP
            const result = StatusReducer(undefined, new LoginErrorAction("error"));

            //TEST
            expect(result).toEqual(
                {
                    loggedIn: false,
                    user: null
                });
        });
    });
});