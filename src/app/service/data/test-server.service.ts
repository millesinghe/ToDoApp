import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestServerService {

  constructor(private http: HttpClient) { }

  executeTestServerService(para:string) {
    return this.http.get(`http://localhost:8080/testBean/param/${para}`);
  }
}
