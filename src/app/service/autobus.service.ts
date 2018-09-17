import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autobus } from '../class/autobus';

@Injectable({
  providedIn: 'root'
})
export class AutobusService {

  base_url = "http://localhost:8080/autobus";

  constructor(private httpClient: HttpClient) { }

  save(autobus: Autobus) {
    return this.httpClient.post<Autobus>(this.base_url, autobus);
  }
}
