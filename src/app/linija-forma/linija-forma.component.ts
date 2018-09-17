import { Component, OnInit } from '@angular/core';
import { Linija } from '../class/linija';
import { LinijaService } from '../service/linija.service';

@Component({
  selector: 'app-linija-forma',
  templateUrl: './linija-forma.component.html',
  styleUrls: ['./linija-forma.component.css']
})
export class LinijaFormaComponent implements OnInit {

  linija: Linija = new Linija();
  msg: string = "";
  greska: boolean = false;

  constructor(private linijaService: LinijaService) { }

  ngOnInit() {
  }

  save(){

  }

}
