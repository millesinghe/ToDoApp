import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthInterceptorService implements HttpInterceptor {

  constructor(private basicAuth: BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let basicAuthString = this.basicAuth.getAuthToken();
    let authUser = this.basicAuth.getAuthUser();
    
    if (basicAuthString && authUser) {
      
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthString
        }
      })

    }
    
    return next.handle(req);
  }
}
