import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { UserService } from '../service/user.service';
import { Tip } from '../class/tip';
import { Router } from '@angular/router';

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
  greska: boolean = false;
  sha1 = require('sha1');

  kategorije = [
    'nezaposlen',
    'zaposlen',
    'student',
    'lice sa invaliditetom',
    'penzioner'
  ];

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {

  }

  onSubmit() {

    this.userService.postoji(this.user.username).subscribe(
      success => {
        if (success == true) {
          this.uspeh = false;
          this.msg = "Username vec postoji!";
          this.greska = true;
        }
      },
      error => {
        this.uspeh = false;
        this.msg = "Greska tokom provere";

      }
    );

    if (!this.greska) return;

    var datum = new Date(this.user.rodjendan);
    // this.user.rodjendan = datum.getFullYear() + '/' + (datum.getMonth() + 1) + '/' + datum.getDate();
    this.user.rodjendan = this.user.rodjendan + " 00:00";
    this.user.zaposlen = this.user.zaposlen.split(' ').join('_');
    this.user.tipovi = [

    ];

    if (this.user.password != this.password_potvrda) {
      this.uspeh = false;
      this.msg = "Lozinke nisu jednake!";
      return;
    }

    this.user.password = this.sha1(this.user.password);
    this.userService.register(this.user).subscribe(
      success => {
        this.uspeh = true;
        alert("Uspesno ste podneli zahtev za registraciju");
        this.router.navigate(['/home']);
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
