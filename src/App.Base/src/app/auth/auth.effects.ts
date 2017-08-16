import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { NOT_AUTHENTICATED } from './auth.actions';

@Injectable()
export class AuthEffects {
   
    @Effect({ dispatch: false }) notAuthenticated: Observable<Action> = this.actions$
        .ofType(NOT_AUTHENTICATED)
        .map(toPayload)
        .do(() => this.router.navigate(['/login']));

    constructor(
        private actions$: Actions,
        private router: Router
    ) { }
}