import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoggedIn = this.authService.getIsLoggedIn();
    if (!isLoggedIn) {
      this._snackBar.open('Для доступа необходимо авторизоваться!');
      this.router.navigate(['/login'])
    }
    return isLoggedIn;
  }
}