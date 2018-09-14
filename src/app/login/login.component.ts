import { Component, OnInit } from '@angular/core';
import { User } from '../class/user'
import { UserService } from '../service/user.service';
import { MycookieService } from '../auth/mycookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  msg: string;


  constructor(private userService: UserService, private cookieService: MycookieService) { }

  ngOnInit() {

  }

  login() {
    var value = "Basic " + btoa(this.user.username + ":" + this.user.password);
    this.userService.login(value).subscribe(
      successResponse => {
        this.user.role = successResponse;
        this.userService.setUser(this.user);
        this.cookieService.setCookie(value);
        this.msg = "";
      },
      errorResponse => {
        this.msg = "Pogresni kredencijali";
      }
    );
    
  }
}
