import { Component, OnInit } from '@angular/core';
import { Linija } from '../class/linija';
import { LinijaService } from '../service/linija.service';
import { Prevoznik } from '../class/prevoznik';
import { PrevoznikService } from '../service/prevoznik.service';
import { Vozac } from '../class/vozac';
import { Autobus } from '../class/autobus';
import { AutobusService } from '../service/autobus.service';
import { VozacService } from '../service/vozac.service';
import { LinijaMedjugradska } from '../class/linija-medjugradska';
import { LinijaMedjugradskaService } from '../service/linija-medjugradska.service';

@Component({
  selector: 'app-linija-forma',
  templateUrl: './linija-forma.component.html',
  styleUrls: ['./linija-forma.component.css']
})
export class LinijaFormaComponent implements OnInit {

  linije: Array<Linija> = new Array<Linija>();
  linija: Linija = new Linija();

  prevoznikIndex: number = 0;
  prevoznici: Array<Prevoznik> = new Array<Prevoznik>();

  vozacIndex: number = 0;
  vozaci: Array<Vozac> = new Array<Vozac>();

  autobusIndex: number = 0;
  autobusi: Array<Autobus> = new Array<Autobus>();

  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'yyyy-MM-dd hh:mm a',
    defaultOpen: false
  }

  polazak;
  dolazak;
  vremepolazka;
  vremedolazka;

  medjugradska: LinijaMedjugradska = new LinijaMedjugradska();

  msgLinija: string = "";
  greskaLinija: boolean = false;
  msgInfo: string = "";
  greskaInfo: boolean = false;
  msgVreme: string = "";
  greskaVreme: boolean = false;
  msgSubmit: string = "";
  greskaSubmit: boolean = false;

  isSubmitted1: boolean = false;
  isSubmitted2: boolean = false;
  isSubmitted3: boolean = false;

  constructor(
    private linijaService: LinijaService,
    private prevoznikService: PrevoznikService,
    private autobusService: AutobusService,
    private vozacService: VozacService,
    private medjugradskaService: LinijaMedjugradskaService
  ) { }

  ngOnInit() {
    this.prevoznikService.get().subscribe(
      success => {
        this.prevoznici = success;
      }
    );

    this.autobusService.get().subscribe(
      succes => {
        this.autobusi = succes;
      }
    );

    this.vozacService.get().subscribe(
      success => {
        this.vozaci = success;
      }
    );
  }

  submitLinija() {

    if (this.linija.odrediste.naziv === "" || this.linija.polaziste.naziv === "") {
      this.greskaLinija = true;
      this.msgLinija = "Polja odrediste i polaziste su obavezna!";
      return;
    } else {
      this.greskaLinija = false;
      this.msgLinija = "Uspesno ste uneli liniju!";
    }

    this.linije.push(this.linija);
    var polaziste = this.linija.odrediste;
    this.linija = new Linija();
    this.linija.polaziste = polaziste;

    this.medjugradska.medjulinije = this.linije;

    this.isSubmitted1 = true;
  }

  submitInfo() {

    if (this.prevoznici.length == 0 || this.vozaci.length == 0 || this.autobusi.length == 0) {
      this.greskaInfo = true;
      this.msgInfo = "Polja vozac, autobus i prevoznik su obavezna!";
    } else {

      this.medjugradska.prevoznik = this.prevoznici[this.prevoznikIndex];
      this.medjugradska.vozac = this.vozaci[this.vozacIndex];
      this.medjugradska.autobus = this.autobusi[this.autobusIndex];

      this.greskaInfo = false;
      this.msgInfo = "Uspesno ste uneli dodatne informacije!";
    }

    this.isSubmitted2 = true;
  }


  submitVreme() {
    if (this.polazak != null && this.vremepolazka != null && this.dolazak != null && this.vremedolazka != null) {
      this.medjugradska.polazak = this.polazak.year + '-' + this.polazak.month + '-' + this.polazak.day + ' ' + this.vremepolazka.hour + ':' + this.vremepolazka.minute;
      this.medjugradska.dolazak = this.dolazak.year + '-' + this.dolazak.month + '-' + this.dolazak.day + ' ' + this.vremedolazka.hour + ':' + this.vremedolazka.minute;

      this.greskaVreme = false;
      this.msgVreme = "Uspesno ste uneli datum i vreme polazka i dolazka!";

      this.isSubmitted3 = true;
    } else {
      this.greskaVreme = true;
      this.msgVreme = "Datum i vreme polazka je obavezno!";
    }
  }

  async submit() {

    if (this.isSubmitted1 && this.isSubmitted2 && this.isSubmitted3) {


      for(let i = 0; i < this.medjugradska.medjulinije.length; i++) {
        let promise = this.linijaService.save(this.medjugradska.medjulinije[i]);
        this.medjugradska.medjulinije[i] = <Linija> await promise;
      }

      // console.log(JSON.stringify(this.medjugradska));

      this.medjugradskaService.save(this.medjugradska).subscribe(
        success => {
          // console.log(success);
          this.greskaSubmit = false;
          this.msgSubmit = "Uspesno ste sacuvali medjugradski liniju!";
        },
        error => {
          // console.log(error);
          this.greskaSubmit = true;
          this.msgSubmit = "Greska prilikom cuvanja medjugradske linije";
        }
      );
    } else {
      this.greskaSubmit = true;
      this.msgSubmit = "Niste uneli sve podatke";
    }
  }

}
