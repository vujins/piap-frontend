import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinijaMedjugradska } from '../class/linija-medjugradska';
import { Pretraga } from '../class/pretraga';

@Injectable({
  providedIn: 'root'
})
export class LinijaMedjugradskaService {

  //TODO izbrisi gosta kad uradis login
  API = 'http://localhost:8080/medjugradska';
  url_pretraga = 'http://localhost:8080/medjugradska/pretraga';

  constructor(private httpClient: HttpClient) { }

  get(page: number): Observable<LinijaMedjugradska[]> {
    return this.httpClient.get<LinijaMedjugradska[]>(this.API + '?stranica=' + page);
  }

  trazi(pretraga: Pretraga, page: number): Observable<LinijaMedjugradska[]> {
    var datum = new Date(pretraga.polazak);
    var myparams = new HttpParams()
      .set("polazak", datum.getFullYear() + '/' + (datum.getMonth() + 1) + '/' + datum.getDate())
      .set("stranica", String(page));

    if (pretraga.prevoznik.length)
      myparams = myparams.set("prevoznik", pretraga.prevoznik);
    if (pretraga.polaziste.length)
      myparams = myparams.set("polaziste", pretraga.polaziste);
    if (pretraga.odrediste.length)
      myparams = myparams.set("odrediste", pretraga.odrediste);

    return this.httpClient.get<LinijaMedjugradska[]>(this.url_pretraga, { params: myparams });
  }
}
