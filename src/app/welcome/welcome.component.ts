import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  title = 'Welcome to the  ToDo Application';
  usName = '';
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.usName = this.route.snapshot.params['name'];
    console.log()
  }

}
