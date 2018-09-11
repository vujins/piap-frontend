import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() {
    //dohvati logovanog usera iz backedna
   }
}
