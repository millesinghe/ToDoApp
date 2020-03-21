import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../service/data/to-do.service';
import { Router } from '@angular/router';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private toDoService: ToDoService, private router: Router) { }

  todoList;

  ngOnInit() {
    let username = sessionStorage.getItem('authUser');
    this.refreshToDos(username);
  }

  refreshToDos(username) {
    this.toDoService.findAllToDos(username).subscribe(
      response => {
        this.todoList = response;
        console.log(this.todoList);
      },
      error => console.log(error));
  }

  deleteTask(id) {
    let username = sessionStorage.getItem('authUser');

    this.toDoService.deleteToDos(username, id).subscribe(
      response => {
        this.refreshToDos(username);
      },
      error => console.log(error));
  }

  updateTask(id) {
    let username = sessionStorage.getItem('authUser');
    this.router.navigate(['todo', id])

  }

  addTask(){
    let username = sessionStorage.getItem('authUser');
    this.router.navigate(['todo',0]);
  }
}

export class ToDo {

  constructor(
    id: number,
    username: string,
    task: string,
    status: boolean,
    date: Date
  ) {
  }
}
