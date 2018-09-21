import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Mesecna } from '../class/mesecna';

@Injectable({
  providedIn: 'root'
})
export class MesecnaService {

  base_url: string = "http://localhost:8080/mesecnakarta";
  odobrene_url: string = this.base_url + '/odobrene';

  constructor(
    private httpClient: HttpClient
  ) { }

  save(mesecna: Mesecna) {
    return this.httpClient.post<Mesecna>(this.base_url, mesecna);
  }

  get() {
    return this.httpClient.get<Mesecna[]>(this.base_url);
  }

  getOdobrene() {
    return this.httpClient.get<Mesecna[]>(this.odobrene_url);
  }

  odobri(mesecna: Mesecna) {
    return this.httpClient.put<Mesecna>(this.base_url, mesecna.id);
  }

  otkazi(mesecna: Mesecna) {
    var myparams = new HttpParams().set('id', String(mesecna.id));
    return this.httpClient.delete<void>(this.base_url, {params: myparams});
  }

}
