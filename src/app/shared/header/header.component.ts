import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isLogged: boolean = false;
  UserInfo = JSON.parse(localStorage.getItem('userInfo')!)

  constructor(private authService: AuthService,
              private _snackBar: MatSnackBar,
              private router: Router) {
    this.isLogged = this.authService.getIsLoggedIn()
  }

  ngOnInit(): void {
    this.UserInfo = JSON.parse(localStorage.getItem('userInfo')!)
    this.authService.isLogged$.subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    })
  }


  logOut() {
    this.authService.logOut()
    this.doLogout()
  }

  doLogout(): void {
    this.authService.removeLocalInfo();
    this._snackBar.open('Вы вышли из системы');
    setTimeout(() => {
      this.router.navigate(['/login']);
    },500)
  }

}
