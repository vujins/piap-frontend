import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Stajaliste } from '../class/stajaliste';

@Injectable({
  providedIn: 'root'
})
export class StajalisteService {

  base_url: string = "http://localhost:8080/stajaliste";
  naziv_url: string = this.base_url + "/naziv";

  constructor(private httpClient: HttpClient) {
    var stajaliste = new Stajaliste();
    stajaliste.naziv = "Zrenjanin";

    this.save(stajaliste);
  }

  save(stajaliste: Stajaliste) {


    return  new Promise((resolve, reject) => {
      var params = new HttpParams().set("naziv", stajaliste.naziv);
      this.httpClient.get<Stajaliste>(this.naziv_url, { params: params }).subscribe(
        success => {
          if (success == null) {
            this.httpClient.post<Stajaliste>(this.base_url, stajaliste).subscribe(
              success => {
                resolve(success);
              },
              error => {
                reject("Stajaliste servis nije uspeo da sacuva stajaliste!");
              }
            );
          } else {
            resolve(success);
          }
        },
        error => {
          reject("Stajaliste servis nije uspeo da nadje stajaliste!");
        }
      );
    }
    );
  }

}
