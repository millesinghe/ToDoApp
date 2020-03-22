import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constant';

export const AUTHENTICATED_USER = "authUser";
export const TOKEN = "token";

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthService(username, password) {

    let basicAuthString = "Basic " + window.btoa(username + ":" + password);

    let headers = new HttpHeaders({ Authorization: basicAuthString })

    return this.http.get<AuthenticationBean>(`${API_URL}/basicAuth`, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthString);
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
