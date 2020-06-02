import { Injectable } from '@angular/core';
import { UserType } from './../interfaces/user-type'
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiServiceService {
  loggedUser: Subject<UserType> = new ReplaySubject(1);
  userInfo: UserType = {
    name: "",
    password: ""
  }
  isLogged: boolean = false;
  constructor() { }
  checkLog(log: boolean) {
    this.isLogged = log;
    return this.isLogged;
  }
  setUserInfo (userData: UserType) {
    if(userData !== null) {
      this.userInfo.name = userData.name;
      this.userInfo.password = userData.password;
      this.loggedUser.next(this.userInfo);
      this.checkLog(true);
    } else {
      this.checkLog(false);
    }   
  }
  retrieveUserInfo() {
    return this.userInfo
  }
  
}
