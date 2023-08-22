import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserLoginType} from "../types/userInfo-type";

export const USERS_KEY = 'users';
export const USER_KEY = 'user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUser$: BehaviorSubject<UserLoginType | null> = new BehaviorSubject<UserLoginType | null>(null)

  constructor() {
    const user = localStorage.getItem(USER_KEY);
      if (user) {
        this.authUser$.next(JSON.parse(user));
      }
  }

  login(user: UserLoginType): void {
    this.authUser$.next(user);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  signup(user: UserLoginType): void {
    const users = localStorage.getItem(USERS_KEY);
    const usersList: UserLoginType[] = users ? JSON.parse(users) : [];
    usersList.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(usersList));
    this.login(user);
  }

  logOut(): void {
    this.authUser$.next(null);
    localStorage.removeItem(USER_KEY);
  }

  userIsAuthorized(): boolean {
    return !!this.authUser$.value
  }
}
