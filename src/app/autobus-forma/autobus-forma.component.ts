import { Component, OnInit } from '@angular/core';
import { Autobus } from '../class/autobus';
import { AutobusService } from '../service/autobus.service';

@Component({
  selector: 'app-autobus-forma',
  templateUrl: './autobus-forma.component.html',
  styleUrls: ['./autobus-forma.component.css']
})
export class AutobusFormaComponent implements OnInit {

  autobus: Autobus = new Autobus();
  msg: string = "";
  greska: boolean = false;

  constructor(private autobusService: AutobusService) { }

  ngOnInit() {
  }

  save() {
    this.autobusService.save(this.autobus).subscribe(
      success => {
        this.msg = "Uspesno dodat autobus!";
        this.greska = false;
      }, error => {
        this.msg = "Greska prilikom dodavanja autobusa!";
        this.greska = true;
      }
    );
  }

}
