import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {UserInfoType, UserLoginType} from "../types/userInfo-type";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userInfo = 'users';
  public isLogged$: Subject<boolean> = new Subject<boolean>();
  public isLogged: boolean = false;

  constructor() {
    this.isLogged = !!localStorage.getItem(this.userInfo);
  }

  login(): void {
    this.isLogged = true;
    this.isLogged$.next(this.isLogged);
  }

  logOut(): void {
    this.isLogged = false;
    this.isLogged$.next(this.isLogged);
  }

  public getIsLoggedIn() {
    return this.isLogged;
  }

  public getInfo() {
    let users = JSON.parse(localStorage.getItem('users') || 'false');
    return users.find((item: UserInfoType) => item.email)
  }

  public setInfo(userInfo: UserInfoType | UserLoginType): void {
    let users = localStorage.getItem('users');
    if (users) {
      let usersArray = JSON.parse(users);
      usersArray.push(userInfo);
      localStorage.setItem('users', JSON.stringify(usersArray));
    } else {
      let usersArray = [];
      usersArray.push(userInfo);
      localStorage.setItem('users', JSON.stringify(usersArray))
    }
    this.isLogged = true;
    this.isLogged$.next(true);
  }

}
