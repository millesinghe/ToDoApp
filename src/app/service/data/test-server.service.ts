import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class TestServerService {

  constructor(private http: HttpClient) { }

  executeTestServerService(para:string) {

    let basicAuth = this.basicAuth();

    let headers = new HttpHeaders({Authorization:basicAuth})

    return this.http.get(`${API_URL}/testBean/param/${para}`, {headers});
  }

  basicAuth(){
    let username = "root";
    let password = "toor";
    let basicAuthString = "Basic " + window.btoa(username + ":" + password);

    return basicAuthString;
  }
}
