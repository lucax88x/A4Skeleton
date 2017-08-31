import { LoginRedirectAction } from '../auth.actions';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AuthSelectors } from '../auth.selectors';
import { AuthState } from '../auth.state';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<AuthState>) { }

    canActivate(): Observable<boolean> {
        return this.store.select(AuthSelectors.LoggedIn).take(1).map(authed => {
            if (authed) {
                return true;
            }

            this.store.dispatch(new LoginRedirectAction());

            return false;
        });
    }
}
