import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LinijaGradska } from '../class/linija-gradska';

@Injectable({
  providedIn: 'root'
})
export class LinijaGradskaService {

  base_url: string = "http://localhost:8080/gradska";
  pretraga_url: string = this.base_url + "/pretraga";

  constructor(private httpClient: HttpClient) { }

  get(page: number) {
    return this.httpClient.get<LinijaGradska>(this.base_url + '?stranica=' + page);
  }

  save(gradska: LinijaGradska) {
    return this.httpClient.post<LinijaGradska>(this.base_url, gradska);
  }

  trazi(broj_linije: string, polaziste: string, odrediste: string, page: number) {

    var myparams = new HttpParams()
      .set('stranica', String(page));

    if (broj_linije.length)
      myparams = myparams.set('broj_linije', broj_linije);
    if (polaziste.length)
      myparams = myparams.set('polaziste', polaziste);
    if (odrediste.length)
      myparams = myparams.set('odrediste', odrediste);

    return this.httpClient.get<LinijaGradska[]>(this.pretraga_url, { params: myparams });
  }

}
