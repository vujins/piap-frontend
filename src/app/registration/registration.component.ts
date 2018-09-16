import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  msg: string = "";
  password_potvrda: string = "";

  user: User = new User();
  uspeh: boolean = false;
  sha1 = require('sha1');

  kategorije = [
    'nezaposlen',
    'zaposlen',
    'student',
    'lice sa invaliditetom',
    'penzioner'
  ];

  constructor(private userService: UserService) {

   }

  ngOnInit() {

  }

  onSubmit() {

    var datum = new Date(this.user.rodjendan);
    // this.user.rodjendan = datum.getFullYear() + '/' + (datum.getMonth() + 1) + '/' + datum.getDate();
    this.user.rodjendan = this.user.rodjendan + " 00:00";
    this.user.zaposlen = this.user.zaposlen.split(' ').join('_');

    if (this.user.password != this.password_potvrda) {
      this.uspeh = false;
      this.msg = "Lozinke nisu jednake!";
      return;
    }

    this.user.password = this.sha1(this.user.password);
    this.userService.register(this.user).subscribe(
      success => {
        this.uspeh = true;
        this.msg = "Uspesno ste podneli zahtev za registraciju";
      },
      error => {
        this.uspeh = false;
        this.msg = "Greska tokom registracije";
      }
    );

  }

  reset() {
    this.msg = "";
    this.uspeh = false;
  }

}
