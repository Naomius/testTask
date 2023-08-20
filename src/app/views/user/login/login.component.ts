import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../../core/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  isLogged: boolean = false;

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
    if (this.loginForm.valid && this.loginForm.value.email && this.loginForm.value.password
      && this.loginForm.value.rememberMe) {
      const userInfo = this.authService.getInfo();
      console.log(userInfo)

      if (this.loginForm.value.email === userInfo.email && this.loginForm.value.password === userInfo.password) {
        this.authService.login();
        this._snakeBar.open('Вы успешно авторизовались');
        this.router.navigate(['/posts'])
      } else {
        this._snakeBar.open('Необходимо зарегистрироваться');
      }
    }
  }

}
