import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { error } from 'util';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { SEARCH_USER, SearchUserCompleteAction, SearchUserErrorAction } from './user-list.actions';


@Injectable()
export class UserListEffects {

    @Effect() search: Observable<Action> = this.actions$
        .ofType(SEARCH_USER)
        .map(toPayload)
        .switchMap((payload: any) => this.userService.list())
        .map((users: User[]) => new SearchUserCompleteAction(users))
        .catch((error) => Observable.of(new SearchUserErrorAction(error)));

    constructor(
        private actions$: Actions,
        private userService: UserService,
    ) {
    }
}