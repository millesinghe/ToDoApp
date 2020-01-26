import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    
    if (username === 'admin' && password === '') {
      sessionStorage.setItem("authUser", username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    if (sessionStorage.getItem("authUser") !== null) {
      return true;
    } else { return false; }
  }

  logout(){
    sessionStorage.removeItem("authUser");
  }
}
