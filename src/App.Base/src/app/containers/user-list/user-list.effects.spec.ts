import 'rxjs/Rx';

import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../../services/user.service';
import { UserBuilder } from '../../spec/builders/user-builder';
import { UserFactory } from '../../spec/factories/user-factory';
import { SearchUserAction, SearchUserCompleteAction, SearchUserErrorAction } from './user-list.actions';
import { UserListEffects } from './user-list.effects';

describe('UserListEffects', () => {
    let actions: Observable<any>;
    let userService: jasmine.SpyObj<UserService>;
    let sut: UserListEffects;

    beforeEach(async(() => TestBed.configureTestingModule({

        providers: [
            UserListEffects,
            provideMockActions(() => actions),
            {
                provide: UserService,
                useValue: jasmine.createSpyObj('userService', ['list'])
            }
        ]
    })));

    beforeEach(() => {
        sut = TestBed.get(UserListEffects);
        userService = TestBed.get(UserService);
    });

    describe('search', () => {

        it('should return a SearchUserErrorAction, when an error occurs', () => {

            //SETUP
            userService.list.and.returnValue(cold('-#', {}, 'Error!'));
            actions = hot('-a', { a: new SearchUserAction() });

            //ACT && TEST
            sut.search.subscribe(result => {
                expect(result).toEqual(new SearchUserErrorAction('Error!'));
            });
        });

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
    });
});