import 'rxjs/Rx';

import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';

import { LoggedInAction, LoggedOutAction, LoginAction, LogoutAction, NotAuthorizedAction } from './auth.actions';
import { AuthEffects } from './auth.effects';
import { AuthService } from './services/auth.service';

describe('AuthEffects', () => {
    let actions: Observable<any>;
    let router: jasmine.SpyObj<Router>;
    let auth: jasmine.SpyObj<AuthService>;
    let sut: AuthEffects;

    beforeEach(async(() => TestBed.configureTestingModule({

        providers: [
            AuthEffects,
            provideMockActions(() => actions),
            {
                provide: Router,
                useValue: jasmine.createSpyObj('router', ['navigate'])
            },
            {
                provide: AuthService,
                useValue: jasmine.createSpyObj('auth', ['login', 'logout'])
            }
        ]
    })));

    beforeEach(() => {
        sut = TestBed.get(AuthEffects);
        router = TestBed.get(Router);
        auth = TestBed.get(AuthService);
    });

    describe('login', () => {

        it('should perform auth0 login', () => {

            // SETUP
            actions = hot('-a', { a: new LoginAction() });

            // ACT && TEST
            sut.login.subscribe(result => {
                expect(auth.login).toHaveBeenCalled();
            });
        });
    });

    describe('loggedIn', () => {

        it('should redirect to admin page once logged', () => {

            // SETUP
            actions = hot('-a', { a: new LoggedInAction() });

            // ACT && TEST
            sut.loggedIn.subscribe(result => {
                expect(router.navigate).toHaveBeenCalledWith(['/admin/users']);
            });
        });
    });

    describe('logout', () => {

        it('should perform logout', () => {

            // SETUP
            actions = hot('-a', { a: new LogoutAction() });

            // ACT && TEST
            sut.logout.subscribe(result => {
                expect(auth.logout).toHaveBeenCalled();
            });
        });
    });

    describe('loggedOut', () => {

        it('should redirect to home once loggedOut', () => {

            // SETUP
            actions = hot('-a', { a: new LoggedOutAction() });

            // ACT && TEST
            sut.loggedOut.subscribe(result => {
                expect(router.navigate).toHaveBeenCalledWith(['/']);
            });
        });
    });

    describe('notAuthorized', () => {

        it('should redirect to home if not authorized', () => {

            // SETUP
            actions = hot('-a', { a: new NotAuthorizedAction() });

            // ACT && TEST
            sut.notAuthorized.subscribe(result => {
                expect(router.navigate).toHaveBeenCalledWith(['/']);
            });
        });
    });
});
