import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let username = "root";
    let password = "toor";
    let basicAuthString = "Basic " + window.btoa(username + ":" + password);

    req = req.clone({
      setHeaders: {
        Authorization :basicAuthString}
    })
    return next.handle(req);
  }
}
