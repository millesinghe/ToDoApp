import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from '../service/data/to-do.service';
import { ToDo } from '../todos/todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: ToDoService
  ) { }

  taskId: number;
  taskName: string;
  taskDate: Date;
  taskStatus: boolean;

  todo: ToDo;

  ngOnInit() {
    let username = sessionStorage.getItem('authUser');
    this.taskId = this.route.snapshot.params['id']

    this.todo = new ToDo(1, 'admin', 'Task', false, new Date());
    if (this.taskId != 0) {
      this.todoService.findToDo(username, this.taskId).subscribe(
        response => {
          this.todo = response;
        }, error => {
          console.log(error);
        }
      );
      console.log('update - > ' + this.taskId);
    }



  }

  goBack() {
    this.router.navigate(["todos"]);
  }

  updateToDo() {
    let username = sessionStorage.getItem('authUser');
    this.taskId = this.route.snapshot.params['id']
    if (this.taskId == 0) {
      this.todoService.addToDos(username, this.taskId, this.todo).subscribe(
        response => {
          this.todo = response;
          this.router.navigate(['todos']);
        }, error => {
          console.log(error);
        }
      );
      console.log('Insert Pressed');
    } else {
      this.todoService.updateToDos(username, this.taskId, this.todo).subscribe(
        response => {
          this.todo = response;
          this.router.navigate(['todos']);
        }, error => {
          console.log(error);
        }
      );
      console.log('update Pressed');
    }

  }

}
