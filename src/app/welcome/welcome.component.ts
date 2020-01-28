import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestServerService } from '../service/data/test-server.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  title: string = 'Welcome';
  serverResponsMsg: string;
  errorResponsMsg: string;
  usName: string = '';
  customMsg : string;

  constructor(private route: ActivatedRoute, private testServerService: TestServerService) { }

  ngOnInit() {
    this.usName = this.route.snapshot.params['name'];
  }

  executeTestServer() {
    console.log('input - '+ this.customMsg);
    this.testServerService.executeTestServerService(this.customMsg).subscribe(response => this.successReponse(response), error => this.errorResponse(error));
  }

  successReponse(response) {
    console.log("Success- " + response.message);
    this.serverResponsMsg = response.message;
  }

  errorResponse(response) {
    console.log("Error- " + response.message);
    this.errorResponsMsg = response.message;
  }
}
