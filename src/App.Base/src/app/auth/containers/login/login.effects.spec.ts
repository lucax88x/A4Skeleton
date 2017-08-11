import 'rxjs/Rx';

import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';

import { LoginService } from '../../services/login.service';
import { UserFactory } from '../../spec/factories/user-factory';
import { LoginAction, LoginCompleteAction, LoginErrorAction } from './login.actions';
import { UserListEffects } from './login.effects';

describe('UserListEffects', () => {
    let actions: Observable<any>;
    let userService: jasmine.SpyObj<UserService>;
    let toastrService: jasmine.SpyObj<ToastrService>;
    let sut: UserListEffects;

    beforeEach(async(() => TestBed.configureTestingModule({

        providers: [
            UserListEffects,
            provideMockActions(() => actions),
            {
                provide: UserService,
                useValue: jasmine.createSpyObj('userService', ['list'])
            },
            {
                provide: ToastrService,
                useValue: jasmine.createSpyObj('toastrService', ['error'])
            }
        ]
    })));

    beforeEach(() => {
        sut = TestBed.get(UserListEffects);
        userService = TestBed.get(UserService);
        toastrService = TestBed.get(ToastrService);
    });

    describe('SearchUserAction', () => {

        it('should return a SearchUserCompleteAction, when we get users', () => {
            //SETUP            
            let users = UserFactory.multiple(2);

            userService.list.and.returnValue(cold('-a', { a: users }));
            actions = hot('-a', { a: new SearchUserAction() });

            //ACT && TEST
            sut.search.subscribe(result => {
                expect(result).toEqual(new SearchUserCompleteAction(users));
            });
        });

        it('should return a SearchUserErrorAction, when an error occurs', () => {

            //SETUP
            userService.list.and.returnValue(cold('-#', {}, 'Error!'));
            actions = hot('-a', { a: new SearchUserAction() });

            //ACT && TEST
            sut.search.subscribe(result => {
                expect(result).toEqual(new SearchUserErrorAction('Error!'));
            });
        });
    });

    describe('SearchUserErrorAction', () => {

        it('should return a pop a toastr', () => {

            //SETUP            
            actions = hot('-a', { a: new SearchUserErrorAction("fatal error") });

            //ACT && TEST
            sut.notifyError.subscribe(result => {
                expect(toastrService.error).toHaveBeenCalledWith("fatal error");
            });
        });
    });
});