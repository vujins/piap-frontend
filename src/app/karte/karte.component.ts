import { Component, OnInit } from '@angular/core';
import { Rezervacija } from '../class/rezervacija';
import { RezervacijaService } from '../service/rezervacija.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-karte',
  templateUrl: './karte.component.html',
  styleUrls: ['./karte.component.css']
})
export class KarteComponent implements OnInit {

  rezervacije: Array<Rezervacija>;

  msg: string = "";
  greska: boolean = false;

  constructor(
    private userService: UserService,
    private rezervacijaService: RezervacijaService
    ) { }

  ngOnInit() {
    
    this.rezervacijaService.getUser().subscribe(
      success => {
        this.rezervacije = success;
      }
    );
  }

  otkazi(rezervacija: Rezervacija) {
    this.rezervacijaService.delete(rezervacija).subscribe(
      success => {
        delete this.rezervacije[this.rezervacije.indexOf(rezervacija)];
        this.msg = "Uspesno ste otkazali rezervaciju!";
        this.greska = false;
      },
      error => {
        this.msg = "Greska prilikom otkazivanja rezervacije!";
        this.greska = true;
      }
    );
    
  }

}
