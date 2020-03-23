import { Injectable } from '@angular/core';
import { JwtAuthenticationService } from '../jwt-authentiation.service';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JWTAuthInterceptorService implements HttpInterceptor {

  constructor(private jwtAuth: JwtAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let jwtAuthString = this.jwtAuth.getAuthToken();
    let authUser = this.jwtAuth.getAuthUser();
    
    if (jwtAuthString && authUser) {
      
      req = req.clone({
        setHeaders: {
          Authorization: jwtAuthString
        }
      })

    }
    
    return next.handle(req);
  }
  
}
