import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../../core/auth.service";
import {UserLoginType} from "../../../types/userInfo-type";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLogged: boolean = false;
  user!: UserLoginType;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _snakeBar: MatSnackBar,
              private authService: AuthService) {
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
      this.authService.setInfo(userInformation)
      this._snakeBar.open('Вы успешно зарегистрировались');
      this.router.navigate(['/posts'])
    }
  }

  get userEmail() {
    return this.loginForm.get('email') as FormControl;
  }
  get userPassword() {
    return this.loginForm.get('password') as FormControl;
  }

}
