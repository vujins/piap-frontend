import { Injectable } from '@angular/core';
import { CookieService } from 'node_modules/ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class MycookieService {

  constructor(private cookieService: CookieService) { }

  setCookie(value: string) {
    this.cookieService.set('user', value, 100000);
  }

  getCookie() {
    return this.cookieService.get('user');
  }

  deleteCookie() {
    this.cookieService.delete('user');
  }
}
