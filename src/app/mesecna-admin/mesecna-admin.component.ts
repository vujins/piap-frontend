import { Component, OnInit } from '@angular/core';
import { MesecnaService } from '../service/mesecna.service';
import { Mesecna } from '../class/mesecna';

@Component({
  selector: 'app-mesecna-admin',
  templateUrl: './mesecna-admin.component.html',
  styleUrls: ['./mesecna-admin.component.css']
})
export class MesecnaAdminComponent implements OnInit {

  mesecne: Array<Mesecna> = new Array<Mesecna>();

  msg: string = "";
  greska: boolean = false;

  constructor(
    private mesecnaService: MesecnaService
  ) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.mesecnaService.get().subscribe(
      success => {
        this.mesecne = success;
        this.msg = '';
        this.greska = false;
      },
      error => {
        this.msg = 'Greska prilikom dohvatanja karata';
        this.greska = true;
      }
    );
  }

  odobri(mesecna: Mesecna) {
    mesecna.odobren = true;
    this.mesecnaService.odobri(mesecna).subscribe(
      success => {
        mesecna = success;
        this.msg = 'Uspesno ste odobrili kartu!';
        this.greska = false;
      },
      error => {
        this.msg = 'Greska prilikom odobravanja karte!';
        this.greska = true;
      }
    );
  }

  otkazi(mesecna: Mesecna) {
    delete this.mesecne[this.mesecne.indexOf(mesecna)];
    this.mesecnaService.otkazi(mesecna).subscribe(
      success => {
        this.msg = 'Uspesno ste otkazali kartu!';
        this.greska = false;
      },
      error => {
        this.msg = 'Greska prilikom otkazivanja karte!';
        this.greska = true;
      }
    );
  }

}
