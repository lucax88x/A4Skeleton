import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) { }

  login(): Observable<boolean> {
    return Observable.of(false);
  }

}
