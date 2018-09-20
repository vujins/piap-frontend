import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Linija } from '../class/linija';
import { StajalisteService } from './stajaliste.service';
import { Stajaliste } from '../class/stajaliste';


@Injectable({
  providedIn: 'root'
})
export class LinijaService {

  base_url = "http://localhost:8080/linija";
  pronadji_url = this.base_url + "/pronadji";

  constructor(
    private httpClient: HttpClient,
    private stajalisteService: StajalisteService
  ) { }

  async save(linija: Linija) {
    linija.odrediste = <Stajaliste>await this.stajalisteService.save(linija.odrediste);
    linija.polaziste = <Stajaliste>await this.stajalisteService.save(linija.polaziste);

    return new Promise((resolve, reject) => {
      var params = new HttpParams()
      .set("polaziste", linija.polaziste.naziv)
      .set("odrediste", linija.odrediste.naziv);
      this.httpClient.get<Linija>(this.pronadji_url, {params : params}).subscribe(
        success => {
          if (success) {
            // console.log("Linija servis je nasao liniju!");
            // console.log(success);
            resolve(success);
          }
          else {
            this.httpClient.post<Linija>(this.base_url, linija).subscribe(
              success => {
                // console.log("Linija servis je sacuvao liniju!");
                // console.log(success);
                resolve(success);
              },
              error => {
                reject(error);
              }
            );
          }
        },
        error => {
          reject(error);
        }
      );
    });

  }
}
