import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'root';
  password = '';

  invalidLogin = false;
  loggingMsg = '';

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    console.log('Username - '+ this.username + ' Password - ' + this.password);
    if(this.username === 'admin' && this.password === 'admin123'){
      this.invalidLogin = true;
      this.loggingMsg = this.username + ' is successfully logged';
      console.log('success');
    }else{
      this.invalidLogin = true;
      this.loggingMsg = 'Invalid Username or Password';
      console.log('fail');
    }
  }

}
