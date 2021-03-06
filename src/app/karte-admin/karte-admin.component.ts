import { Component, OnInit } from '@angular/core';
import { RezervacijaService } from '../service/rezervacija.service';
import { Rezervacija } from '../class/rezervacija';

@Component({
  selector: 'app-karte-admin',
  templateUrl: './karte-admin.component.html',
  styleUrls: ['./karte-admin.component.css']
})
export class KarteAdminComponent implements OnInit {

  rezervacije: Array<Rezervacija>;

  msg: string = "";
  greska: boolean = false;

  constructor(
    private rezervacijaService: RezervacijaService
  ) { }

  ngOnInit() {
    this.rezervacijaService.get().subscribe(
      success => {
        this.rezervacije = success;
      }
    );
  }

  odobri(rezervacija: Rezervacija) {
    this.rezervacijaService.odobri(rezervacija).subscribe(
      success => {
        this.rezervacije[this.rezervacije.indexOf(rezervacija)].odobren = true;
        this.msg = "Uspesno ste odobrili rezervaciju!";
        this.greska = false;
      },
      error => {
        this.msg = "Greska prilikom odobravanja rezervacije!";
        this.greska = true;
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
