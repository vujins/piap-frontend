import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prevoznik } from '../class/prevoznik';

@Injectable({
  providedIn: 'root'
})
export class PrevoznikService {

  base_url = "http://localhost:8080/prevoznik";

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get<Array<Prevoznik>>(this.base_url);
  }
}
