import { AuthenticateBuilder } from '../../spec/builders/authenticate-builder';
import { AuthActions, LoginAction, LoginErrorAction, LoginFailedAction, LoginSuccessAction } from '../../auth.actions';
import { LoginReducer } from './login.reducer';
import { LoginState } from './login.state';

describe('LoginReducer', () => {
    it('should return the default state', () => {
        //SETUP && ACT
        const result = LoginReducer(undefined, {} as AuthActions);

        //TEST
        expect(result).toEqual(new LoginState());
    });

    describe('LOGIN', () => {
        it('should lock', () => {
            //SETUP
            let authenticate = new AuthenticateBuilder().withUsername("username").withPassword("password").build();
            const result = LoginReducer(undefined, new LoginAction(authenticate));

            //TEST
            expect(result).toEqual(
                {
                    lock: true
                });
        });
    });

    describe('LOGIN_COMPLETE', () => {
        it('should unlock', () => {
            //SETUP
            const result = LoginReducer(undefined, new LoginSuccessAction());

            //TEST
            expect(result).toEqual(
                {
                    lock: false
                });
        });
    });

    describe('LOGIN_FAILED', () => {
        it('should unlock', () => {
            //SETUP
            const result = LoginReducer(undefined, new LoginFailedAction());

            //TEST
            expect(result).toEqual(
                {
                    lock: false
                });
        });
    });

    describe('LOGIN_ERROR', () => {
        it('should unlock', () => {
            //SETUP
            const result = LoginReducer(undefined, new LoginErrorAction("error"));

            //TEST
            expect(result).toEqual(
                {
                    lock: false
                });
        });
    });
});