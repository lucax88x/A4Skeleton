import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { LogoutAction } from '../../../auth/auth.actions';
import { AuthState } from '../../../auth/auth.state';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {

  constructor(private store: Store<AuthState>) {
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }
}
