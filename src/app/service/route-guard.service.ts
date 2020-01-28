import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private routerManager : Router, private hardcodedAuthentication: HardcodedAuthenticationService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthentication.isUserLoggedIn()) { 
      return true; 
    }

    this.routerManager.navigate(['']);
    return false;

  }
}
