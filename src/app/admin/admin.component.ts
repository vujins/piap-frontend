import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../class/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  korisnici: Array<User> = new Array<User>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.dohvatiKorisnike();
  }

  dohvatiKorisnike() {
    this.userService.neodobreni().subscribe(
      success => {
        this.korisnici = success;
      }
    );
  }

  odobri(korisnik: User) {
    this.userService.odobri(korisnik.username).subscribe();
    delete this.korisnici[this.korisnici.indexOf(korisnik)];
  }

  odbij(korisnik: User) {
    this.userService.odbij(korisnik.username).subscribe();
    delete this.korisnici[this.korisnici.indexOf(korisnik)];
  }

}
