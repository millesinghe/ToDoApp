import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';


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

  constructor(private route: Router, private basicAuthService: BasicAuthenticationService, private hardcodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hardcodedAuthentication.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.route.navigate(['welcome', this.username])
    } else {
      this.invalidLogin = true;
      this.loggingMsg = 'Invalid Username or Password';
      console.log('fail');
    }
  }

  handleLoginWithBasicAuth() {
    this.basicAuthService.executeAuthService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.invalidLogin = false;
      this.route.navigate(['welcome', this.username])
      }, error => {
        this.invalidLogin = true;
        this.loggingMsg = 'Invalid Username or Password';
        console.log(error);
      }
    );
  }

}
