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
    { id: 1, task: 'wedding', status: false },
    { id: 2, task: 'Fly Singapore', status: false },
    { id: 3, task: 'Find a Job', status: false }
  ]

}
