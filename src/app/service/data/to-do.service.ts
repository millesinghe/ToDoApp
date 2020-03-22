import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  findAllToDos(username) {
    return this.http.get(`http://localhost:8080/users/${username}/todos`);
  }

  findToDo(username,id) {
    return this.http.get(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  deleteToDos(username,id) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateToDos(username, id, todo) {
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo);
  }

  addToDos(username, id, todo) {
    return this.http.post(`http://localhost:8080/users/${username}/todos`,todo);
  }


}
