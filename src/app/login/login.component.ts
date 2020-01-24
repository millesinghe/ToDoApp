import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '';

  invalidLogin = false;
  loggingMsg = '';

  constructor(private route : Router) { }

  ngOnInit() {
  }

  handleLogin(){
    console.log('Username - '+ this.username + ' Password - ' + this.password);
    if(this.username === 'admin' && this.password === ''){
      this.invalidLogin = false;
      this.route.navigate(['welcome',this.username])
      console.log('success');
    }else{
      this.invalidLogin = true;
      this.loggingMsg = 'Invalid Username or Password';
      console.log('fail');
    }
  }

}
