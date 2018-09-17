import { Component, OnInit } from '@angular/core';
import { VozacService } from '../service/vozac.service';
import { Vozac } from '../class/vozac';

@Component({
  selector: 'app-vozac-forma',
  templateUrl: './vozac-forma.component.html',
  styleUrls: ['./vozac-forma.component.css']
})
export class VozacFormaComponent implements OnInit {

  vozac: Vozac = new Vozac();
  msg: string = "";
  greska: boolean = false;

  constructor(private vozacService: VozacService) { }

  ngOnInit() {
  }

  save() {
    this.vozacService.save(this.vozac).subscribe(
      success => {
        this.msg = "Uspesno dodat vozac!";
        this.greska = false;
      }, error => {
        this.msg = "Greska prilikom dodavanja vozaca!";
        this.greska = true;
      }
    );
  }

}
