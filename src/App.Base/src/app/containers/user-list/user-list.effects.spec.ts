import { async, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../../services/user.service';
import { UserListEffects } from './user-list.effects';

describe('UserListEffects', () => {
    let userService: UserService;
    let sut: UserListEffects;

    beforeEach(async(() => TestBed.configureTestingModule({

        providers: [
            UserListEffects,
            {
                provide: UserService,
                useValue: jasmine.createSpyObj('userService', ['list'])
            }
        ]
    })));

    beforeEach(async(() => {
        // runner = TestBed.get(EffectsRunner);
        sut = TestBed.get(UserListEffects);
        userService = TestBed.get(UserService);
    }));

    describe('search', () => {

        it('should return a GET_POSTS_SUCCESS action, on success', () => {
            // const postsToReturn = [{ id: 1 }];

            // userService.list.and.returnValue(Observable.of(postsToReturn));

            // const expectedResult = getPostsSuccess(postsToReturn);

            // // runner.queue(getPosts());

            // sut.search.subscribe(result => {
            //     expect(result).toEqual(expectedResult);
            // });

        });
    });
});