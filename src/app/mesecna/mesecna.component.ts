import { Component, OnInit } from '@angular/core';
import { CenaService } from '../service/cena.service';
import { UserService } from '../service/user.service';
import { MesecnaService } from '../service/mesecna.service';
import { Mesecna } from '../class/mesecna';

@Component({
  selector: 'app-mesecna',
  templateUrl: './mesecna.component.html',
  styleUrls: ['./mesecna.component.css']
})
export class MesecnaComponent implements OnInit {

  mesecne: Array<Mesecna> = new Array<Mesecna>();

  cenaMesecna: number;
  cenaGodisnja: number;

  msg: string = "";
  greska: boolean = false;

  constructor(
    private mesecnaService: MesecnaService,
    private cenaService: CenaService
  ) { }

  ngOnInit() {
    this.getMesecna();
    this.getGodisnja();
    this.getOdobren();
  }

  getMesecna() {
    this.cenaService.get('mesecna').subscribe(
      success => {
        this.cenaMesecna = success;
      }
    );
  }

  getGodisnja() {
    this.cenaService.get('godisnja').subscribe(
      success => {
        this.cenaGodisnja = success;
      }
    );
  }

  kupi(tip: string) {
    var mesecna = new Mesecna();
    var date = new Date();
    mesecna.pocetak = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
    mesecna.tip = tip;

    this.mesecnaService.save(mesecna).subscribe(
      success => {
        if (tip === 'mesecna')
          this.msg = 'Uspesno ste podneli zahtev za mesecnu kartu';
        else if (tip === 'godisnja')
          this.msg = 'Uspesno ste podneli zahtev za godisnju kartu';
        this.greska = false;
      },
      error => {
        this.msg = 'Greska prilikom kupovini karte';
        this.greska = true;
      }
    );
  }

  getOdobren() {
    this.mesecnaService.getOdobrene().subscribe(
      success => {
        this.mesecne = success;
      },
      error => {
        this.msg = 'Greska prilikom dohvatanja karata';
        this.greska = true;
      }
    );
  }

}
