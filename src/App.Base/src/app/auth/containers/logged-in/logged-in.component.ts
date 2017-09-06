import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedInComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
    this.auth.handleAuthentication();
  }

}
