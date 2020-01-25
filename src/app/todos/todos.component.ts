import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  todoList = [
    new ToDo(1, 'wedding', false, new Date()),
    new ToDo(2, 'Fly Singapore', false, new Date()),
    new ToDo(3, 'Find a Job', false, new Date()),
  ]

}

export class ToDo {
  constructor(
    public id: number,
    public task: string,
    public status: boolean,
    public dueDate: Date
  ) {
  }
}
