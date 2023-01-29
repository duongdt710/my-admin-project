import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getCurrentInfo() {
    const currentUser = JSON.parse(JSON.stringify(localStorage.getItem('account_infor')));
    return currentUser;
  }
}
