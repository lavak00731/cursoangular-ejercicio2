import { Component, OnInit } from '@angular/core';
import { UserType } from './../../interfaces/user-type';
import { AuthApiServiceService } from './../../services/auth-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: UserType;

  constructor(private _userService: AuthApiServiceService) { }

  ngOnInit(): void {
    this._userService.loggedUser.subscribe((user) => this.user = user)
  }  

}
