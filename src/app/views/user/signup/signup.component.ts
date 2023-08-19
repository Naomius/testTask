import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../../core/auth.service";
import {UserInfoType} from "../../../types/userInfo-type";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  isLogged: boolean = false;
  user!: UserInfoType;


  constructor(private fb: FormBuilder,
              private router: Router,
              private _snackBar: MatSnackBar,
              private authService: AuthService) {
    this.authService.isLogged$.subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    })
  }

  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[А-Яа-я]?[\s\]?[А-Яа-я]{2,29}$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]],
    passwordRepeat: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]],
    rememberMe: [false, [Validators.requiredTrue]]
  })


  signup(): void {
      const userInformation = this.user = {
        name: this.userName.value,
        email: this.userEmail.value,
        password: this.userPassword.value,
        passwordRepeat: this.userPasswordRepeat.value,
      }
    if (this.signupForm.valid && this.signupForm.value.name && this.signupForm.value.email
        && this.signupForm.value.password && this.signupForm.value.passwordRepeat) {
        this.authService.setInfo(userInformation)
        this._snackBar.open('Вы успешно зарегистрировались');
        this.router.navigate(['/login'])
    }
  }


  get userName() {
    return this.signupForm.get('name') as FormControl;
  }
  get userEmail() {
    return this.signupForm.get('email') as FormControl;
  }
  get userPassword() {
    return this.signupForm.get('password') as FormControl;
  }
  get userPasswordRepeat() {
    return this.signupForm.get('passwordRepeat') as FormControl;
  }


}
