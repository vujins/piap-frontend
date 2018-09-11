import { Component, OnInit } from '@angular/core';
import { User } from '../class/user'
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  logIn() {
    this.userService.user = this.user;
  }
}
