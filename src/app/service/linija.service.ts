import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class LinijaService {

  base_url = "http://localhost:8080/vozac";

  constructor(private httpClient: HttpClient) { }
}
