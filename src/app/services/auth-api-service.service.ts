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
  constructor() { }
  setUserInfo (userData: UserType) {
    this.userInfo.name = userData.name;
    this.userInfo.password = userData.password;
    this.loggedUser.next(this.userInfo);
  }
  retrieveUserInfo() {
    return this.userInfo
  }
  
}
