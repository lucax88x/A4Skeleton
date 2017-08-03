import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../app.state';
import { User } from '../../models/user';
import { SearchUserAction } from './user-list.actions';
import { getLock, getUsers } from './user-list.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  lock$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.users$ = this.store.select(getUsers);
    this.lock$ = this.store.select(getLock);
  };

  ngOnInit() {
  }

  search() {
    this.store.dispatch(new SearchUserAction());
  }
}
