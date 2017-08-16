import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AuthState } from '../auth.state';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<AuthState>) { }

    canActivate(): Observable<boolean> {
        return Observable.of(false);
        // return this.store.select(LoginSelectors.Lock).take(1).map(authed => {
        //   if (!authed) {
        //     this.store.dispatch(new Auth.LoginRedirect());
        //     return false;
        //   }

        //   return true;
        // });
    }
}
