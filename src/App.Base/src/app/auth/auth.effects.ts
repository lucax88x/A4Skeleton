import { Routes } from '../app.routes';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LOGIN_REDIRECT, LOGIN_SUCCESS, LOGOUT } from './auth.actions';

@Injectable()
export class AuthEffects {

    @Effect({ dispatch: false })
    loginSuccess = this.actions$
        .ofType(LOGIN_SUCCESS)
        .do(() => this.router.navigate([Routes.Admin.Users]));

    @Effect({ dispatch: false })
    loginRedirect: Observable<Action> = this.actions$
        .ofType(LOGIN_REDIRECT, LOGOUT)
        .map(toPayload)
        .do(() => this.router.navigate([Routes.Auth.Login]));

    constructor(
        private actions$: Actions,
        private router: Router
    ) { }
}