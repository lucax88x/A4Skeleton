import 'rxjs/Rx';

import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';

import { LoginRedirectAction, LoginSuccessAction, LogoutAction } from './auth.actions';
import { AuthEffects } from './auth.effects';

describe('AuthEffects', () => {
    let actions: Observable<any>;
    let router: jasmine.SpyObj<Router>;
    let sut: AuthEffects;

    beforeEach(async(() => TestBed.configureTestingModule({

        providers: [
            AuthEffects,
            provideMockActions(() => actions),
            {
                provide: Router,
                useValue: jasmine.createSpyObj('router', ['navigate'])
            }
        ]
    })));

    beforeEach(() => {
        sut = TestBed.get(AuthEffects);
        router = TestBed.get(Router);
    });

    describe('loginSuccess', () => {

        it('should redirect to home page once logged', () => {

            //SETUP            
            actions = hot('-a', { a: new LoginSuccessAction() });

            //ACT && TEST
            sut.loginSuccess.subscribe(result => {
                expect(router.navigate).toHaveBeenCalledWith(["/admin/users"]);
            });
        });
    });

    describe('loginRedirect', () => {

        it('should redirect to login page', () => {

            //SETUP            
            actions = hot('-a', { a: new LoginRedirectAction() });

            //ACT && TEST
            sut.loginRedirect.subscribe(result => {
                expect(router.navigate).toHaveBeenCalledWith(["/login"]);
            });
        });

        it('should redirect to login page', () => {

            //SETUP            
            actions = hot('-a', { a: new LogoutAction() });

            //ACT && TEST
            sut.loginRedirect.subscribe(result => {
                expect(router.navigate).toHaveBeenCalledWith(["/login"]);
            });
        });
    });
});