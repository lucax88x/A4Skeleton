import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import { error } from 'util';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { SEARCH_USER, SEARCH_USER_ERROR, SearchUserCompleteAction, SearchUserErrorAction } from './user-list.actions';


@Injectable()
export class UserListEffects {

    @Effect() search: Observable<Action> = this.actions$
        .ofType(SEARCH_USER)
        .map(toPayload)
        .switchMap(payload => this.userService.list()
            .map((users: User[]) => new SearchUserCompleteAction(users))
            .catch((error) => Observable.of(new SearchUserErrorAction(error)))
        );

    @Effect({ dispatch: false }) notifyError: Observable<Action> = this.actions$
        .ofType(SEARCH_USER_ERROR)
        .map(toPayload)
        .do((error: string) => this.toastrService.error(error));

    constructor(
        private actions$: Actions,
        private userService: UserService,
        private toastrService: ToastrService

    ) {
    }
}