import { Authenticate } from '../../models/user';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoginAction } from '../../auth.actions';
import { AuthState } from '../../auth.state';
import { LoginSelectors } from './login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  lock$: Observable<boolean>;

  constructor(private store: Store<AuthState>) {
    this.lock$ = this.store.select(LoginSelectors.Lock);
  };

  ngOnInit() {
  }

  onSubmit($event: Authenticate) {
    this.store.dispatch(new LoginAction($event));
  }
}
