import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userIsAuthorized = this.authService.userIsAuthorized();

  constructor(private authService: AuthService,
              private _snackBar: MatSnackBar) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.userIsAuthorized = this.authService.userIsAuthorized();

    if (this.userIsAuthorized) {
      return true;
    } else {
      this._snackBar.open('Для доступа необходимо авторизоваться!');
      return false;
    }
  }
}
