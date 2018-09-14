import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = new User();
  API = 'http://localhost:8080/korisnik/login';

  constructor(private httpClient: HttpClient) {

  }

  setUser(user: User) {
    this.user = user;
  }

  login(value: string): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(this.API, {
      headers: {"Authorization" : value }
    });
  }
}
