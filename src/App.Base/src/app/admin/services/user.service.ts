import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }

  list() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(response => response.json());
  }

}
