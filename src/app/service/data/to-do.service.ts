import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  findAllToDos(username) {
    return this.http.get(`${API_URL}/users/${username}/todos`);
  }

  findToDo(username,id) {
    return this.http.get(`${API_URL}/users/${username}/todos/${id}`);
  }

  deleteToDos(username,id) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateToDos(username, id, todo) {
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`,todo);
  }

  addToDos(username, id, todo) {
    return this.http.post(`${API_URL}/users/${username}/todos`,todo);
  }


}
