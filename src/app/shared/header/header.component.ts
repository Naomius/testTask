import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from "../../core/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {UserInfoType} from "../../types/userInfo-type";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck{

  isLogged: boolean = false;
  userName: string | null = '';

  constructor(private authService: AuthService,
              private _snackBar: MatSnackBar,
              private router: Router) {
    this.isLogged = this.authService.getIsLoggedIn()
  }

  ngOnInit(): void {
    this.authService.isLogged$.subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    })
  }

  name() {
    if (localStorage.length !== 0) {
      const userInfo = this.authService.getInfo()
        return this.userName = userInfo.name
    }
  }


  doLogout(): void {
    this.authService.logOut();
    this._snackBar.open('Вы вышли из системы');
    setTimeout(() => {
      this.router.navigate(['/login']);
    },500)
  }

  ngDoCheck(): void {
    this.name()
  }

}
