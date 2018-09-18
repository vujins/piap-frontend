import { Component, OnInit } from '@angular/core';
import { Linija } from '../class/linija';
import { LinijaService } from '../service/linija.service';
import { Prevoznik } from '../class/prevoznik';
import { PrevoznikService } from '../service/prevoznik.service';
import { Vozac } from '../class/vozac';
import { Autobus } from '../class/autobus';
import { AutobusService } from '../service/autobus.service';
import { VozacService } from '../service/vozac.service';

@Component({
  selector: 'app-linija-forma',
  templateUrl: './linija-forma.component.html',
  styleUrls: ['./linija-forma.component.css']
})
export class LinijaFormaComponent implements OnInit {

  linije: Array<Linija> = new Array<Linija>();
  linija: Linija = new Linija();
  
  prevoznici: Array<Prevoznik> = new Array<Prevoznik>();
  prevoznik: Prevoznik = new Prevoznik();

  vozaci: Array<Vozac> = new Array<Vozac>();
  vozac: Vozac = new Vozac();

  autobusi: Array<Autobus> = new Array<Autobus>();
  autobus: Autobus = new Autobus;

  polazak: Date;
  dolazak: Date;

  msg: string = "";
  greska: boolean = false;

  constructor(
    private linijaService: LinijaService, 
    private prevoznikService: PrevoznikService,
    private autobusService: AutobusService,
    private vozacService: VozacService
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

  sacuvajLiniju() {

    if (this.linija.odrediste.naziv === "" || this.linija.polaziste.naziv === "") {
      this.greska = true;
      this.msg = "Polja odrediste i polaziste su obavezna!";
      return;
    } else {
      this.greska = false;
      this.msg = "";
    }

    this.linije.push(this.linija);
    var polaziste = this.linija.odrediste;
    this.linija = new Linija();
    this.linija.polaziste = polaziste;

    console.log(this.linije);
  }

}
