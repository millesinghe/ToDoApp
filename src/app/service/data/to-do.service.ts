import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  findAllToDos(username) {
    return this.http.get(`http://localhost:8080/users/${username}/todos`);
  }


}
