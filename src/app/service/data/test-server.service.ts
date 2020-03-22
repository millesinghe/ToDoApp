import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestServerService {

  constructor(private http: HttpClient) { }

  executeTestServerService(para:string) {

    let basicAuth = this.basicAuth();

    let headers = new HttpHeaders({Authorization:basicAuth})

    return this.http.get(`http://localhost:8080/testBean/param/${para}`, {headers});
  }

  basicAuth(){
    let username = "root";
    let password = "toor";
    let basicAuthString = "Basic " + window.btoa(username + ":" + password);

    return basicAuthString;
  }
}
