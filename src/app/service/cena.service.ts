import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CenaService {

  base_url: string = "http://localhost:8080/cene";

  constructor(private httpClient: HttpClient) { }

  get(tip: string) {
    var myparams = new HttpParams().set('tip', tip);
    return this.httpClient.get<number>(this.base_url, {params: myparams});
  }
}
