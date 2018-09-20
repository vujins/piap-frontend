import { Component, OnInit } from '@angular/core';
import { LinijaGradska } from '../../class/linija-gradska';
import { LinijaGradskaService } from '../../service/linija-gradska.service';

@Component({
  selector: 'app-linija-gradska-list',
  templateUrl: './linija-gradska-list.component.html',
  styleUrls: ['./linija-gradska-list.component.css']
})
export class LinijaGradskaListComponent implements OnInit {

  private linije: Array<LinijaGradska> = new Array<LinijaGradska>();
  private pages: Array<number> = new Array<number>();

  broj_linije: string = "";
  polaziste: string = "";
  odrediste: string = "";

  ispretraga: boolean = false;

  constructor(private gradskaService: LinijaGradskaService) { }

  ngOnInit() {
    this.get();
  }

  paginacija(page: number) {
    if (this.ispretraga) {
      this.trazi(page);
    } else {
      this.get(page);
    }
  }

  get(page: number = 0) {
    return this.gradskaService.get(page).subscribe(
      data => {
        this.linije = data['content'];
        this.pages = new Array(data['totalPages']);
      }
    );
  }

  trazi(page: number = 0) {
    this.ispretraga = true;
    this.gradskaService.trazi(this.broj_linije, this.polaziste, this.odrediste, page).subscribe(
      data => {
        this.linije = data['content'];
        this.pages = new Array(data['totalPages']);
      }
    );
  }

  restartuj() {
    this.broj_linije = this.polaziste = this.odrediste = "";
    this.ispretraga = false;
    this.get();
  }

}
