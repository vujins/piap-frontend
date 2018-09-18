import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  date: Date = new Date();
  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'yyyy-MM-dd hh:mm a',
      defaultOpen: false
  }

  constructor() { }

  ngOnInit() {

  }
}
