import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';
import { MycookieService } from '../auth/mycookie.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = new User();
  isLoggedIn: boolean = false;
  login_url = 'http://localhost:8080/korisnik/login';

  constructor(private httpClient: HttpClient, private cookieService: MycookieService) {
    var value = this.cookieService.getCookie();
    if (value.length) {
      this.login(value).subscribe(
        successResponse => {
          var decodedValue = atob(value);
          this.user.username = decodedValue.split(':')[0];

          this.isLoggedIn = true;
          this.user.role = successResponse;
        },
        errorResponse => {
          alert("STA SE DESAVA");
        }
      );
    }
  }

  setUser(user: User) {
    this.user = user;
    this.isLoggedIn = true;
  }

  login(value: string): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(this.login_url);
  }

  logout() {
    this.isLoggedIn = false;
    this.user = null;
  }

}
