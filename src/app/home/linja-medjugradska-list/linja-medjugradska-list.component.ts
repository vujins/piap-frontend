import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pretraga } from '../../class/pretraga';
import { LinijaMedjugradskaService } from '../../service/linija-medjugradska.service'; import { $ } from 'protractor';
import { LinijaMedjugradska } from '../../class/linija-medjugradska';

@Component({
  selector: 'app-linja-medjugradska-list',
  templateUrl: './linja-medjugradska-list.component.html',
  styleUrls: ['./linja-medjugradska-list.component.css']
})
export class LinjaMedjugradskaListComponent implements OnInit {
  private linije: Array<LinijaMedjugradska> = new Array<LinijaMedjugradska>();
  private pages: Array<number> = new Array<number>();

  pretraga: Pretraga = new Pretraga();
  ispretraga: boolean = false;

  constructor(private linijaMedjugradskaService: LinijaMedjugradskaService) { }

  ngOnInit() {
    this.get();
  }

  get(page:number = 0) {
    this.linijaMedjugradskaService.get(page).subscribe(
      data=>{
        this.linije = data['content'];
        this.pages = new Array(data['totalPages']);
      }
    );
  }

  trazi(page: number = 0) {
    this.ispretraga = true;
    this.linijaMedjugradskaService.trazi(this.pretraga, page).subscribe(
      data=>{
        this.linije = data['content'];
        this.pages = new Array(data['totalPages']);
      }
    );
  }

  paginacija(page: number) {
    if (this.ispretraga){
      this.trazi(page);
    } else {
      this.get(page);
    }
  }

  restartuj() {
    this.pretraga.polazak =  this.pretraga.prevoznik =  this.pretraga.polaziste =  this.pretraga.odrediste = "";
    this.ispretraga = false;
    this.get();
  }

}
