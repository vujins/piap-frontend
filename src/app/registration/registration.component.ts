import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  myRecaptcha: boolean;

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

    if (!this.myRecaptcha) {
      this.uspeh = false;
      this.msg = "Potvrdite da niste robot!";
      this.greska = true;
    }

    let response = new Promise((resolve, reject) => {
      this.userService.postoji(this.user.username).subscribe(
        postoji => {
          if (postoji) {
            this.uspeh = false;
            this.msg = "Username vec postoji!";
            this.greska = true;
            reject(this.msg);
          } else {
            resolve();
            this.greska = false;
          }
        },
        error => {
          this.uspeh = false;
          this.msg = "Greska tokom provere";
          reject(this.msg);
        }
      );
    });

    response.then(() => {
      if (!this.greska) {
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
            this.msg = "";
            alert("Uspesno ste podneli zahtev za registraciju");
            this.router.navigate(['/home']);
          },
          error => {
            this.uspeh = false;
            this.msg = "Greska tokom registracije";
          }
        );
      }
    }).catch(error => {
      console.log(error);
    });




  }

  reset() {
    this.msg = "";
    this.uspeh = false;
  }


}
