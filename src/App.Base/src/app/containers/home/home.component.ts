import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LoginAction, LogoutAction } from '../../auth/auth.actions';
import { AuthSelectors } from '../../auth/auth.selectors';
import { AuthState } from '../../auth/auth.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  loggedIn$: Observable<boolean>;

  constructor(public store: Store<AuthState>) {
    this.loggedIn$ = this.store.select(AuthSelectors.LoggedIn);
  }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new LoginAction());
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }
}
