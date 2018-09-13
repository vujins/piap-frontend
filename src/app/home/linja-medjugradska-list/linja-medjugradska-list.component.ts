import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pretraga } from '../../class/pretraga';
import { LinijaMedjugradskaService } from '../../service/linija-medjugradska.service';

@Component({
  selector: 'app-linja-medjugradska-list',
  templateUrl: './linja-medjugradska-list.component.html',
  styleUrls: ['./linja-medjugradska-list.component.css']
})
export class LinjaMedjugradskaListComponent implements OnInit {
  linijaMedjugradska$: Observable<any>;
  pretraga: Pretraga = new Pretraga();

  constructor(private linijaMedjugradskaService: LinijaMedjugradskaService) { }

  ngOnInit() {
    this.linijaMedjugradska$ = this.linijaMedjugradskaService.get();
  }

  trazi() {
    this.linijaMedjugradska$ = this.linijaMedjugradskaService.pretrazi(this.pretraga);
  }

  restartuj() {
    this.pretraga.odrediste = this.pretraga.polaziste = this.pretraga.polazak = this.pretraga.prevoznik = "";
    this.linijaMedjugradska$ = this.linijaMedjugradskaService.get();
  }

}
