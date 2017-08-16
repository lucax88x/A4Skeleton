import { UserFactory } from '../../spec/factories/user-factory';
import { SearchUserAction, SearchUserCompleteAction, SearchUserErrorAction, UserListActions } from './user-list.actions';
import { UserListReducer } from './user-list.reducer';
import { UserListState } from './user-list.state';

describe('UserListReducer', () => {
    it('should return the default state', () => {
        //SETUP && ACT
        const result = UserListReducer(undefined, {} as UserListActions);

        //TEST
        expect(result).toEqual(new UserListState());
    });

    describe('SEARCH_USER', () => {
        it('should lock and reset users', () => {
            //SETUP
            const result = UserListReducer(undefined, new SearchUserAction());

            //TEST
            expect(result).toEqual(
                {
                    users: [],
                    lock: true
                });
        });
    });

    describe('SEARCH_USER_COMPLETE', () => {
        it('should unlock and assign users', () => {
            //SETUP
            let users = UserFactory.multiple(3);
            const result = UserListReducer(undefined, new SearchUserCompleteAction(users));

            //TEST
            expect(result).toEqual(
                {
                    users: users,
                    lock: false
                });
        });
    });

    describe('SEARCH_USER_ERROR', () => {
        it('should unlock and reset users', () => {
            //SETUP
            const result = UserListReducer(undefined, new SearchUserErrorAction("error"));

            //TEST
            expect(result).toEqual(
                {
                    users: [],
                    lock: false
                });
        });
    });
});