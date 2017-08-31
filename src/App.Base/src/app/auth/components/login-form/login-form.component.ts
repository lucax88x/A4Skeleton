import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Authenticate } from '../../models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: `./login-form.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<Authenticate>();

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  constructor() { }

  ngOnInit() { }

  submit() {
    if (this.loginForm.valid) {
      this.submitted.emit(this.loginForm.value);
    }
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
}
