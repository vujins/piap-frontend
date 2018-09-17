import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vozac } from '../class/vozac';

@Injectable({
  providedIn: 'root'
})
export class VozacService {

  base_url = "http://localhost:8080/vozac";

  constructor(private httpClient: HttpClient) { }

  save(vozac: Vozac) {
    return this.httpClient.post<Vozac>(this.base_url, vozac);
  }
}
