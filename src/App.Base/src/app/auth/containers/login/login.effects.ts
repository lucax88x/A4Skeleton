import { LOGIN, LOGIN_ERROR, LoginCompletedAction, LoginErrorAction } from './login.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import { error } from 'util';

import { AuthService } from '../../services/auth.service';

@Injectable()
export class LoginEffects {

    @Effect() login: Observable<Action> = this.actions$
        .ofType(LOGIN)
        .map(toPayload)
        .switchMap(payload => this.authService.login("prova", "pass")
            .map(() => new LoginCompletedAction())
            .catch((error) => Observable.of(new LoginErrorAction(error)))
        );

    @Effect({ dispatch: false }) notifyError: Observable<Action> = this.actions$
        .ofType(LOGIN_ERROR)
        .map(toPayload)
        .do((error: string) => this.toastrService.error(error));

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private toastrService: ToastrService

    ) { }
}