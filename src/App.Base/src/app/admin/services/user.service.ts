import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }

  list(): Observable<User[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(response => response.json());
  }

}
