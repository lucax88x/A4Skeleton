import { LoginAction, LoginActions, LoginCompletedAction, LoginErrorAction } from './login.actions';
import { LoginReducer } from './login.reducer';
import { LoginState } from './login.state';

describe('LoginReducer', () => {
    it('should return the default state', () => {
        //SETUP && ACT
        const result = LoginReducer(undefined, {} as LoginActions);

        //TEST
        expect(result).toEqual(new LoginState());
    });

    describe('LOGIN', () => {
        it('should lock', () => {
            //SETUP
            const result = LoginReducer(undefined, new LoginAction());

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
            const result = LoginReducer(undefined, new LoginCompletedAction());

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