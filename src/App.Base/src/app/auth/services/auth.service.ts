import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) { }

  login(username: string, password: string): Observable<boolean> {
    if (username !== 'test') {
      return Observable.throw('Invalid username or password');
    }

    return Observable.of(true);
  }

}
