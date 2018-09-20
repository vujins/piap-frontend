import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';
import { Rezervacija } from '../class/rezervacija';
import { LinijaMedjugradska } from '../class/linija-medjugradska';

@Injectable({
  providedIn: 'root'
})
export class RezervacijaService {

  base_url: string = "http://localhost:8080/rezervacija";
  korisnik_url: string = this.base_url + '/korisnik';

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) { }

  getUser() {
    let myparams = new HttpParams()
      .set('username', this.userService.user.username);
    return this.httpClient.get<Rezervacija[]>(this.korisnik_url, { params: myparams });
  }

  save(linija: LinijaMedjugradska) {

    var myparams = new HttpParams().set('username', this.userService.user.username);

    return this.httpClient.post<Rezervacija>(this.base_url, linija, { params: myparams });
  }

  get() {
    return this.httpClient.get<Rezervacija[]>(this.base_url);
  }

  delete(rezervacija: Rezervacija) {
    var myparams = new HttpParams().set('id', String(rezervacija.id));
    return this.httpClient.delete<void>(this.base_url, { params: myparams });
  }

  odobri(rezervacija: Rezervacija) {
    return this.httpClient.put<Rezervacija>(this.base_url, rezervacija.id);
  }

}
