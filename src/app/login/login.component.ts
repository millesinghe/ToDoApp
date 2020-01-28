import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


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

  constructor(private route : Router, private hardcodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.hardcodedAuthentication.authenticate(this.username, this.password)){
      this.invalidLogin = false;
      this.route.navigate(['welcome',this.username])
      console.log('success');
      console.log(this.hardcodedAuthentication.isUserLoggedIn())
    }else{
      this.invalidLogin = true;
      this.loggingMsg = 'Invalid Username or Password';
      console.log('fail');
    }
  }

}
