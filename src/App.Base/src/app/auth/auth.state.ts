import { StatusState } from './status.state';
import { LoginState } from './containers/login/login.state';

export interface AuthState {
  status: StatusState;
  login: LoginState;
}