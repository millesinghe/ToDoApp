import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../service/data/to-do.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private toDoService: ToDoService) { }

  todoList

  ngOnInit() {
    let username = sessionStorage.getItem('authUser');
    console.log('todo user - ' + username);
    this.toDoService.findAllToDos(username).subscribe(
      response => {
        this.todoList = response;
        console.log(this.todoList);
      } ,
      error => console.log(error));
  }

}

export class ToDo {
  constructor(
    public id: number,
    public task: string,
    public username: string,
    public status: boolean,
    public date: Date
  ) {
  }
}
