import { NotAuthenticatedAction } from './auth.actions';
import 'rxjs/Rx';

import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

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

    describe('NotAuthenticatedAction', () => {

        it('should redirect to login page', () => {

            //SETUP            
            actions = hot('-a', { a: new NotAuthenticatedAction() });

            //ACT && TEST
            sut.notAuthenticated.subscribe(result => {
                expect(router.navigate).toHaveBeenCalledWith(["/login"]);
            });
        });
    });
});