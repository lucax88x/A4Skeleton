import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';

import {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_FAILED,
    LoginErrorAction,
    LoginFailedAction,
    LoginSuccessAction,
} from '../../auth.actions';
import { Authenticate } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class LoginEffects {

    @Effect()
    login: Observable<Action> = this.actions$
        .ofType(LOGIN)
        .map(toPayload)
        .switchMap((payload: Authenticate) => this.authService.login(payload.username, payload.password)
            .map(loggedIn => {
                if (loggedIn)
                    return new LoginSuccessAction()

                return new LoginFailedAction()
            })
            .catch((error) => Observable.of(new LoginErrorAction(error)))
        );

    @Effect({ dispatch: false })
    notifyError: Observable<Action> = this.actions$
        .ofType(LOGIN_ERROR)
        .map(toPayload)
        .do((error: string) => this.toastrService.error(error));

    @Effect({ dispatch: false })
    loginFailed: Observable<Action> = this.actions$
        .ofType(LOGIN_FAILED)
        .map(toPayload)
        .do(() => this.toastrService.error("wrong username & password"));

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private toastrService: ToastrService

    ) { }
}