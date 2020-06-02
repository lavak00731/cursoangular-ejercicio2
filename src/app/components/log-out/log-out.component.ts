import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserType } from './../../interfaces/user-type';
import { AuthApiServiceService } from './../../services/auth-api-service.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {
  
  constructor(private _loggedUser: AuthApiServiceService, private _snackBar: MatSnackBar ) { }
  showFeedback (message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnInit(): void {
    if (this._loggedUser !== undefined) {
      this._loggedUser.setUserInfo(null);
      this.showFeedback('You are not', 'logged anymore!');
    }
  }

}
