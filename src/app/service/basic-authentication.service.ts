import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthService(username, password) {

    let basicAuthString = "Basic " + window.btoa(username + ":" + password);

    let headers = new HttpHeaders({ Authorization: basicAuthString })

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicAuth`, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem("authUser", username);
          sessionStorage.setItem("token", basicAuthString);
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

  getAuthUser(){
    return sessionStorage.getItem("authUser");
  }

  getAuthToken(){
    if (this.getAuthUser()){
      return sessionStorage.getItem("token");
    }
  }
}

export class AuthenticationBean {

  constructor(public message: string) { }
}
