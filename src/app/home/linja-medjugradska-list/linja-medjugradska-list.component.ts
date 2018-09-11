import { Component, OnInit } from '@angular/core';
import { LinijaMedjugradskaService } from '../../service/linija-medjugradska.service';
import { LinijaMedjugradska } from '../../class/linija-medjugradska';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-linja-medjugradska-list',
  templateUrl: './linja-medjugradska-list.component.html',
  styleUrls: ['./linja-medjugradska-list.component.css']
})
export class LinjaMedjugradskaListComponent implements OnInit {
  columnsToDisplay: string[] = ['Prevoznik', 'Polazak', 'Medjulinije'];
  linijaMedjugradska$: Observable<any>;

  constructor(private linijaMedjugradskaService: LinijaMedjugradskaService) { }

  ngOnInit() {
    this.linijaMedjugradska$ = this.linijaMedjugradskaService.get();
  }
}

LinjaMedjugradskaListComponent.prototype.toString = function() {
  return "asd";
}