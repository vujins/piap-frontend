import { Component, OnInit } from '@angular/core';
import { Linija } from '../../class/linija';
import { LinijaGradska } from '../../class/linija-gradska';
import { LinijaService } from '../../service/linija.service';
import { Vozac } from '../../class/vozac';
import { VozacService } from '../../service/vozac.service';
import { LinijaGradskaService } from '../../service/linija-gradska.service';

@Component({
  selector: 'app-gradska-forma',
  templateUrl: './gradska-forma.component.html',
  styleUrls: ['./gradska-forma.component.css']
})
export class GradskaFormaComponent implements OnInit {

  gradska: LinijaGradska = new LinijaGradska();

  linija: Linija = new Linija();

  broj_linije: number;
  red_voznje: string = "";
  vozaci: Array<Vozac> = new Array<Vozac>();
  vozacIndex: number = 0;

  msgLinija: string = "";
  greskaLinija: boolean = false;

  msgInfo: string = "";
  greskaInfo: boolean = false;

  msgSubmit: string = "";
  greskaSubmit: boolean = false;

  isSubmitted1: boolean = false;
  isSubmitted2: boolean = false;

  //TODO dodaj gradsku servis
  constructor(
    private linijaService: LinijaService,
    private vozacService: VozacService,
    private gradskaService: LinijaGradskaService
  ) { }

  ngOnInit() {
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

    this.gradska.medjulinije.push(this.linija);

    var polaziste = this.linija.odrediste;
    this.linija = new Linija();
    this.linija.polaziste = polaziste;

    

    this.isSubmitted1 = true;
  }

  submitInfo() {
    if (this.vozaci.length == 0 || this.broj_linije == null || this.red_voznje === "") {
      this.greskaInfo = true;
      this.msgInfo = "Polja vozac, autobus i prevoznik su obavezna!";
    } else {


      this.gradska.vozac = this.vozaci[this.vozacIndex];
      this.gradska.red_voznje = this.red_voznje;
      this.gradska.broj_linije = this.broj_linije;

      this.greskaInfo = false;
      this.msgInfo = "Uspesno ste uneli dodatne informacije!";
    }

    this.isSubmitted2 = true;
  }

  async submit() {
    // if (this.isSubmitted1 && this.isSubmitted2) {
    if (this.isSubmitted1) {

      for (let i = 0; i < this.gradska.medjulinije.length; i++) {
        let promise = this.linijaService.save(this.gradska.medjulinije[i]);
        this.gradska.medjulinije[i] = <Linija>await promise;
      }

      this.gradskaService.save(this.gradska).subscribe(
        success => {
          this.msgSubmit = "Uspesno ste sacuvali liniju!";
          this.greskaSubmit = false;
        },
        error => {
          this.msgSubmit = "Greska prilikom cuvanja linije";
          this.greskaSubmit = true;
        }
      );

    }

  }

}
