import { LoggedOutAction, LoginErrorAction, LoggedInAction } from '../auth.actions';
import { AuthState } from '../auth.state';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { WebAuth } from 'auth0-js';

@Injectable()
export class AuthService {

  auth0: WebAuth;

  constructor(
    private store: Store<AuthState>
  ) {
    this.auth0 = new WebAuth({
      clientID: 'VPuJYkKl1EgMfggyBCQTCjn2EuLmR13Y',
      domain: 'memore.eu.auth0.com',
      responseType: 'token id_token',
      audience: 'https://memore.eu.auth0.com/userinfo',
      redirectUri: 'http://127.0.0.1:4200/logged-in',
      scope: 'openid'
    });

    if (this.isAuthenticated()) {
      this.store.dispatch(new LoggedInAction());
    }
  }

  login(): void {
    this.auth0.authorize(null);
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.store.dispatch(new LoggedInAction());
      } else if (err) {
        this.store.dispatch(new LoginErrorAction(err));
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.store.dispatch(new LoggedOutAction());
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
