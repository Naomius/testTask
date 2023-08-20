import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../../core/auth.service";
import {UserInfoType, UserLoginType} from "../../../types/userInfo-type";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  isLogged: boolean = false;
  user!: UserLoginType;
  storageInfo!: UserInfoType
  // user = {};

  constructor(private fb: FormBuilder,
              private router: Router,
              private _snakeBar: MatSnackBar,
              private authService: AuthService) {
    this.authService.isLogged$.subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    })
  }

  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    rememberMe: [false]
  })



  login(): void {
    const userInformation = this.user = {
      email: this.userEmail.value,
      password: this.userPassword.value,
    }
    if (this.loginForm.valid && this.loginForm.value.email && this.loginForm.value.password
      && this.loginForm.value.rememberMe) {
      // this.authService.getInfo(userInformation)
      let users = JSON.parse(localStorage.getItem('users') || 'false');
      this.user = users.find((user: UserLoginType) => user.email === userInformation.email)

      if (!this.user) {
        this._snakeBar.open('Не верные данные');
        return;
      } else {
        if (this.user.password !== userInformation.password) {
          this._snakeBar.open('Не верные данные');
          return;
        }
      }

      this._snakeBar.open('Вы успешно авторизовались');
      this.router.navigate(['/posts'])


    }
  }


  get userEmail() {
    return this.loginForm.get('email') as FormControl;
  }
  get userPassword() {
    return this.loginForm.get('password') as FormControl;
  }

  ngOnInit(): void {
    // this.storageInfo = JSON.parse(localStorage.getItem('userInfo') || 'false')
    // console.log(this.storageInfo.email)
  }

}
