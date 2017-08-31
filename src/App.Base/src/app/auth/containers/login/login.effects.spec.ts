import 'rxjs/Rx';

import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';

import { LoginAction, LoginErrorAction, LoginFailedAction, LoginSuccessAction } from '../../auth.actions';
import { AuthService } from '../../services/auth.service';
import { AuthenticateBuilder } from '../../spec/builders/authenticate-builder';
import { LoginEffects } from './login.effects';

describe('LoginEffects', () => {
    let actions: Observable<any>;
    let authService: jasmine.SpyObj<AuthService>;
    let toastrService: jasmine.SpyObj<ToastrService>;
    let sut: LoginEffects;

    beforeEach(async(() => TestBed.configureTestingModule({

        providers: [
            LoginEffects,
            provideMockActions(() => actions),
            {
                provide: AuthService,
                useValue: jasmine.createSpyObj('authService', ['login'])
            },
            {
                provide: ToastrService,
                useValue: jasmine.createSpyObj('toastrService', ['error'])
            }
        ]
    })));

    beforeEach(() => {
        sut = TestBed.get(LoginEffects);
        authService = TestBed.get(AuthService);
        toastrService = TestBed.get(ToastrService);
    });

    describe('LoginAction', () => {

        it('should return a LoginCompleteAction, when we successfully log in', () => {
            //SETUP            
            let authenticate = new AuthenticateBuilder().withUsername("username").withPassword("password").build();
            authService.login.and.returnValue(cold('-a', { a: true }));
            actions = hot('-a', { a: new LoginAction(authenticate) });

            //ACT && TEST
            sut.login.subscribe(result => {
                expect(result).toEqual(new LoginSuccessAction());
            });
        });

        it('should return a LoginFailedAction, when we fail the log in', () => {
            //SETUP            
            let authenticate = new AuthenticateBuilder().withUsername("username").withPassword("wrongpassword").build();
            authService.login.and.returnValue(cold('-a', { a: false }));
            actions = hot('-a', { a: new LoginAction(authenticate) });

            //ACT && TEST
            sut.login.subscribe(result => {
                expect(result).toEqual(new LoginFailedAction());
            });
        });

        it('should return a LoginErrorAction, when an error occurs', () => {
            //SETUP
            let authenticate = new AuthenticateBuilder().withUsername("username").withPassword("password").build();
            authService.login.and.returnValue(cold('-#', {}, 'Error!'));
            actions = hot('-a', { a: new LoginAction(authenticate) });

            //ACT && TEST
            sut.login.subscribe(result => {
                expect(result).toEqual(new LoginErrorAction('Error!'));
            });
        });
    });

    describe('LoginErrorAction', () => {

        it('should pop a toastr', () => {

            //SETUP            
            actions = hot('-a', { a: new LoginErrorAction("fatal error") });

            //ACT && TEST
            sut.notifyError.subscribe(result => {
                expect(toastrService.error).toHaveBeenCalledWith("fatal error");
            });
        });
    });

    describe('LoginFailedAction', () => {

        it('should pop a toastr', () => {

            //SETUP            
            actions = hot('-a', { a: new LoginFailedAction() });

            //ACT && TEST
            sut.loginFailed.subscribe(result => {
                expect(toastrService.error).toHaveBeenCalledWith("wrong username & password");
            });
        });
    });
});