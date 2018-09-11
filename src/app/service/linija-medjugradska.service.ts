import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinijaMedjugradska } from '../class/linija-medjugradska';

@Injectable({
  providedIn: 'root'
})
export class LinijaMedjugradskaService {

  //TODO izbrisi gosta kad uradis login
  API = 'http://localhost:8080/medjugradska/gost';

  constructor(private httpClient: HttpClient) { }

  get(): Observable<LinijaMedjugradska[]> {
    return this.httpClient.get<LinijaMedjugradska[]>(this.API);
  }
}
