import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LinijaGradska } from '../class/linija-gradska';

@Injectable({
  providedIn: 'root'
})
export class LinijaGradskaService {

  base_url: string = "http://localhost:8080/gradska";

  constructor(private httpClient: HttpClient) { }

  save(gradska: LinijaGradska) {
    return this.httpClient.post<LinijaGradska>(this.base_url, gradska);
  }
}
