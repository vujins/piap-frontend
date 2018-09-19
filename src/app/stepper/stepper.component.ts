import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  polazak;
  dolazak;
  vremepolazka;
  vremedolazka;


  constructor() { }

  ngOnInit() {

  }

  submit() {
    if (this.polazak != null && this.vremepolazka != null) {
      var s = this.polazak.year + '/' + this.polazak.month + '/' + this.polazak.day + ' ' + this.vremepolazka.hour + ':' + this.vremepolazka.minute;
      console.log(s);
    }
    if (this.dolazak != null && this.vremedolazka != null) {
      var s = this.dolazak.year + '/' + this.dolazak.month + '/' + this.dolazak.day + ' ' + this.vremedolazka.hour + ':' + this.vremedolazka.minute;
      console.log(s);
    }
  }
}
