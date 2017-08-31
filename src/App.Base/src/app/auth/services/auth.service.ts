import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) { }

  login(username: string, password: string): Observable<boolean> {
    if (password === 'wrongpassword') {
      return Observable.of(false).delay(400);
    }

    return Observable.of(true).delay(200);    
  }

}
