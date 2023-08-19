import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {UserInfoType, UserLoginType} from "../types/userInfo-type";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userInfoKey = 'userInfo';

  public isLogged$: Subject<boolean> = new Subject<boolean>();
  public isLogged: boolean = false;

  constructor() {
    this.isLogged = !!localStorage.getItem(this.userInfoKey);
  }

  login() {
    this.isLogged = true;
    this.isLogged$.next(this.isLogged);
  }

  signup() {
    this.isLogged = true;
    this.isLogged$.next(this.isLogged);
  }

  logOut() {
    this.isLogged = false;
    this.isLogged$.next(this.isLogged);
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }

  public getIsLoggedIn() {
    return this.isLogged;
  }

  public getInfo(userInfo: UserLoginType): {userInfo: string | null} {
    return {
      userInfo: localStorage.getItem(this.userInfoKey),
    };
  }

  public setInfo(userInfo: UserInfoType | UserLoginType): void {
    localStorage.setItem(this.userInfoKey, JSON.stringify(userInfo));
    this.isLogged = true;
    this.isLogged$.next(true);
  }

  public removeLocalInfo(): void {
    localStorage.removeItem(this.userInfoKey);
    this.isLogged = false;
    this.isLogged$.next(false);
  }

}
