import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AdminState } from '../../admin.state';
import { User } from '../../models/user';
import { SearchUserAction } from './user-list.actions';
import { UserListSelectors } from './user-list.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  lock$: Observable<boolean>;

  constructor(private store: Store<AdminState>) {
    this.users$ = this.store.select(UserListSelectors.Users);
    this.lock$ = this.store.select(UserListSelectors.Lock);
  }

  ngOnInit() {
  }

  search() {
    this.store.dispatch(new SearchUserAction());
  }
}
