import { Component, OnInit } from '@angular/core';
import { MycookieService } from '../auth/mycookie.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private cookieService: MycookieService, private userService: UserService) {

   }

  ngOnInit() {

  }

  logout() {
    this.cookieService.deleteCookie();
    this.userService.logout();
  }

}
