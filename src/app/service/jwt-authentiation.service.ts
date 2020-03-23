import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constant';

export const AUTHENTICATED_USER = "authUser";
export const TOKEN = "token";

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthService(username, password) {
    
    return this.http.post<any>(`${API_URL}/authenticate`, { 
        username,
        password
     }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

  isUserLoggedIn() {
    if (sessionStorage.getItem("authUser") !== null) {
      return true;
    } else { return false; }
  }

  logout() {
    sessionStorage.removeItem("authUser");
    sessionStorage.removeItem("token");
  }

  getAuthUser() {
    return sessionStorage.getItem("authUser");
  }

  getAuthToken() {
    if (this.getAuthUser()) {
      return sessionStorage.getItem("token");
    }
  }
}

export class AuthenticationBean {

  constructor(public message: string) { }
}
