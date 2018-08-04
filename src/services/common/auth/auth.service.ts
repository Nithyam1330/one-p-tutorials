import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';

@Injectable()
export class AuthService {
  activateBool = false;

  constructor(public route : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.activateBool) {
      return true;
    }
    this.route.navigate(['sessions', 'signin']);
    return false;
  }
}
