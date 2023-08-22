import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {UserLoginType} from "../../types/userInfo-type";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  authUser!: UserLoginType | null;

  constructor(private authService: AuthService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.authUser$.subscribe((authUser) => {
      this.authUser = authUser;
    })
  }

  doLogout(): void {
    this._snackBar.open('Вы вышли из системы');
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
