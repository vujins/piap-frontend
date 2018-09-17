import { Component, OnInit } from '@angular/core';
import { User } from '../class/user'
import { UserService } from '../service/user.service';
import { MycookieService } from '../auth/mycookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  msg: string;


  constructor(private userService: UserService, private cookieService: MycookieService, private router: Router) { 
  }

  ngOnInit() {

  }

  login() {
    var sha1 = require('sha1');
    var encryptedPassword = sha1(this.user.password);
    var value = "Basic " + btoa(this.user.username + ":" + encryptedPassword);
    this.cookieService.setCookie(value);
    this.userService.login(value).subscribe(
      successResponse => {

        successResponse.forEach(x => {
          if (x.authority === 'ROLE_ADMIN') {
            this.userService.isAdmin = true;
          } else if (x.authority === 'ROLE_USER') {
            this.userService.isUser = true;
          }
        });
        
        this.userService.setUser(this.user);
        this.msg = "";
        this.router.navigate(['/home']);
      },
      errorResponse => {
        this.msg = "Pogresni kredencijali";
        this.cookieService.deleteCookie();
      }
    );

  }
}
