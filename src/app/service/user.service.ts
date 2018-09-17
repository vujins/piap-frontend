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
  isAdmin: boolean = false;
  isUser: boolean = false;

  base_url = "http://localhost:8080/korisnik";
  login_url = this.base_url + "/login";
  postoji_url = this.base_url + '/postoji';
  neodobreni_url = this.base_url + '/neodobreni';
  odobri_url = this.base_url + '/odobri';
  odbij_url = this.base_url + '/odbij';

  constructor(private httpClient: HttpClient, private cookieService: MycookieService) {

    var value = this.cookieService.getCookie();

    if (value.length) {
      this.login(value).subscribe(
        successResponse => {

          value = value.split(' ')[1];
          var decodedValue = atob(value);
          this.user.username = decodedValue.split(':')[0];

          this.isLoggedIn = true;

          successResponse.forEach(x => {
            if (x.authority === 'ROLE_ADMIN') {
              this.isAdmin = true;
            } else if (x.authority === 'ROLE_USER') {
              this.isUser = true;
            }
          });
        },
        errorResponse => {
          alert("Neuspesan login!");
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

  register(user: User) {
    return this.httpClient.post<User>(this.base_url, user);
  }

  logout() {
    this.isLoggedIn = this.isAdmin = this.isUser = false;
    this.user = null;
    this.cookieService.deleteCookie();
  }

  postoji(username: string) {
    var url = this.postoji_url + '?username=' + username;
    return this.httpClient.get<boolean>(url);
  }

  neodobreni() {
    return this.httpClient.get<Array<User>>(this.neodobreni_url);
  }

  odobri(username: string) {
    return this.httpClient.put<User>(this.odobri_url, username);
  }

  odbij(username: string) {
    return this.httpClient.delete(this.odbij_url + '?username=' + username);
  }

}
