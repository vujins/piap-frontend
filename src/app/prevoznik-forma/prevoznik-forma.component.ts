import { Component, OnInit } from '@angular/core';
import { PrevoznikService } from '../service/prevoznik.service';
import { Prevoznik } from '../class/prevoznik';

@Component({
  selector: 'app-prevoznik-forma',
  templateUrl: './prevoznik-forma.component.html',
  styleUrls: ['./prevoznik-forma.component.css']
})
export class PrevoznikFormaComponent implements OnInit {

  prevoznik: Prevoznik = new Prevoznik();

  greska: boolean = false;
  msg: string = "";

  constructor(private prevoznikService: PrevoznikService) { }

  ngOnInit() {
  }

  save() {

  }

}
