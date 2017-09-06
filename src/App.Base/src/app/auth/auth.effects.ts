import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';

import { Routes } from '../app.routes';
import { LOGGED_IN, LOGGED_OUT, LOGIN, LOGOUT, NOT_AUTHORIZED } from './auth.actions';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthEffects {

    @Effect({ dispatch: false })
    login = this.actions$
        .ofType(LOGIN)
        .do(() => this.auth.login());

    @Effect({ dispatch: false })
    loggedIn = this.actions$
        .ofType(LOGGED_IN)
        .do(() => this.router.navigate([Routes.Admin.Users]));

    @Effect({ dispatch: false })
    logout = this.actions$
        .ofType(LOGOUT)
        .do(() => this.auth.logout());

    @Effect({ dispatch: false })
    loggedOut = this.actions$
        .ofType(LOGGED_OUT)
        .do(() => this.router.navigate([Routes.Home]));

    @Effect({ dispatch: false })
    notAuthorized = this.actions$
        .ofType(NOT_AUTHORIZED)
        .do(() => this.router.navigate([Routes.Home]));

    constructor(
        private actions$: Actions,
        private auth: AuthService,
        private router: Router
    ) { }
}
