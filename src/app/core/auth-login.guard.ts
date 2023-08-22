import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {
  userIsAuthorized: boolean;

  constructor(private authService: AuthService,
              private router: Router) {
    this.userIsAuthorized = this.authService.userIsAuthorized();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.userIsAuthorized) {
      return true;
    } else {
      this.router.navigate(['/main'])
      return false;
    }
  }
}
